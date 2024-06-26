const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'app_user',
  password: '123456',
  database: 'testone'
});

app.post('/insert', async (req, res) => {
  let conn;
  const { sqluser, sqlpassword, sqlemail } = req.body;
  try {
    conn = await pool.getConnection();
    const checkUser = await conn.query('SELECT * FROM userpass WHERE user = ?', [sqluser]);
    const checkEmail = await conn.query('SELECT * FROM userpass WHERE email = ?', [sqlemail]);
    if (checkUser.length > 0 || checkEmail.length > 0) {
      res.status(400).json({ message: '信箱或使用者已存在' });
      return;
    }
    const result = await conn.query('INSERT INTO userpass (user, password, email) VALUES (?, ?, ?)', [sqluser, sqlpassword, sqlemail]);
    console.log(result)
    res.status(200).json({ message: 'User, password, and email entered successfully', insertId:Number(result.insertId) }); // insertId:Number(result.insertId) 原本因為沒有轉換輸入的值導致沒辦法傳送status200，甚至會傳送status500
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (conn) conn.release();
  }
});

app.post('/get', async (req, res) => {
  let conn;
  const { loginuser, loginpw } = req.body;
  try {
    conn = await pool.getConnection();
    const userinsql = await conn.query('SELECT * FROM userpass WHERE user = ?', [loginuser]);
    if (userinsql.length >= 1) {
      const passwordinsql = await conn.query('SELECT password FROM userpass WHERE user = ?', [loginuser]);
      if (passwordinsql[0].password === loginpw) {
        res.status(200).json({ message: '成功登入' });
      } 
      else {
        res.status(400).json({ message: 'wrong password' });
      }
    } 
    else{
      res.status(400).json({ message: 'no user' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (conn) conn.release();
  }
});

http.createServer(app).listen(3030, () => {
  console.log('Listening on 3030');
});
