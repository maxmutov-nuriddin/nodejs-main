const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Используем порт из переменной окружения или 3000 для локальной разработки
const PORT = process.env.PORT || 3000;

// Обслуживаем статические файлы из директории "public"
app.use(express.static(path.join(__dirname, 'public')));

// Используем маршрутизацию из файла routes/index.js
app.use('/', indexRouter);

// Обработка 404 ошибок
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
