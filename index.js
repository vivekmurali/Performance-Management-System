const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost:27017/summer"
const test = require('./models/test');
const bodyParser = require('body-parser');
mongoose.connect(dbUrl, {useNewUrlParser: true},()=>console.log("Connected to db"));


const port = process.env.PORT || 3000;
dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) =>{
    res.render('home.ejs');
})






app.listen(port, () => {console.log(`Listening in port: ${port}`);});
