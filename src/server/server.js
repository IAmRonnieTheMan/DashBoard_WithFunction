// 提供中間件機制,允許開發者定義函數來處理http請求和響應
const express = require('express'); 
const cors = require('cors');
//解析文件類型,提取上傳文件,將文件保存至指定目錄中
const multer = require('multer');
const path = require('path');
//為node.js模組,提供讀取文件,寫入文件,刪除文件,修改文件
const fs = require('fs');
//可通過app變量蘭訪問express的各種功能
const app = express();
//此為應用express實例
app.use(cors({
    origin: 'http://localhost:8080', //允許來自該地址的請求
    credentials: true //表示允許認證訊息,如cookies,http認證
}));

// 設置 Multer 中間件來處理文件上傳
//multer.diskStorage＝儲存在本機磁
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Recent/'); // 指定文件保存的目錄
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 使用原始文件名作為保存的文件名
    }
});
const upload = multer({ storage: storage });

// 處理文件上傳的 POST 請求
app.post('/Recent', upload.single('file1'), (req, res) => {
    try {
        // 獲取上傳的文件信息
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }console.error(error);
        // 在這裡可以進行其他的檔案處理操作，例如保存文件信息到數據庫
        //200為http協議中定義的狀態碼
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
