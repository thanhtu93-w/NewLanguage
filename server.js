const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Phục vụ các file tĩnh trong thư mục 'public'
app.use(express.static('public'));

// Cấu hình routes cho các trang
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/taskboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'taskboard.html'));
});

app.listen(port, () => {
    console.log(`Server đang chạy tại: http://localhost:${port}`);
});