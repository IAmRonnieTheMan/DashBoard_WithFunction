// 提供中間件機制,允許開發者定義函數來處理http請求和響應
const express = require('express'); 
const cors = require('cors');
//解析文件類型,提取上傳文件,將文件保存至指定目錄中
const multer = require('multer');
const path = require('path');

//可通過app變量訪問express的各種功能
const app = express();
//此為應用express實例
//更改header
app.use(cors({
    origin: 'http://localhost:8080', //允許來自該地址的請求
    credentials: true //表示允許認證訊息,如cookies,http認證
}));
// 設置 Multer 中間件來處理文件上傳
//multer.diskStorage＝儲存在本機磁
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //path.join(__dirname加入後就成功執行了
        //__dirname：取得目前名稱執行程序所在的完整目錄
        cb(null, path.join(__dirname, 'upload/')); // 指定文件保存的目录为当前文件所在目录下的 upload 文件夹
    },
    
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 使用原始文件名作為保存的文件名
    }
});
const upload = multer({ storage: storage });
// 處理文件上傳的 POST 請求
//express定義的post請求路由,當發送post請求時,express會調用路由處理函數
app.post('/upload', upload.single('file1'), (req, res) => {
    try {
        // 获取上传的文件信息
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }
        // 在这里可以进行其他的文件处理操作，例如保存文件信息到数据库
        //200为http协议中定义的状态码
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

