const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors({
    origin: 'http://localhost:8080', // 替換為您的前端網站的域名和端口
    credentials: true // 如果您的應用程式需要使用 cookie 或認證信息，請設置為 true
}));

// 設置 Multer 中間件來處理文件上傳
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/'); // 指定文件保存的目錄
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 使用原始文件名作為保存的文件名
    }
});
const upload = multer({ storage: storage });

// 處理文件上傳的 POST 請求
app.post('/upload', upload.single('file1'), (req, res) => {
    try {
        // 獲取上傳的文件信息
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }console.error(error);
        // 在這裡可以進行其他的檔案處理操作，例如保存文件信息到數據庫

        res.status(200).send('File uploaded successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// 監聽端口
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
