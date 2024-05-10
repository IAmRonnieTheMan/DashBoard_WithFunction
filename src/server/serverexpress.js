const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log('這是中介軟體');
    next();
});

app.get("/", (req, res) => {
    res.send('<h1>EXPRESS WEB</h1>');
});

app.use((req, res, next) => {
    res.status(404).send("wrong, 找不到網頁");
});

app.use((err, req, res, next) => {
    res.status(500).send("程式碼錯");
});

const port = 3030;
app.listen(port, () => {
    console.log('port 3030 listening');
});
