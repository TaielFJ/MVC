const express = require('express');
const app = express();
const router= express.Router();
const PORT = 3000;
const mainController= require('./controllers/mainController');
const path = require("path");


app.set("view engine","ejs");

app.set("views", path.join(__dirname, "/views"));

app.use('/', mainController.login)

app.listen(PORT, () => console.log(`
Servidor funcionando en el puerto ${PORT}`));