const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const homeRoute = require('./routes/home');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', () => {
    console.log('Something went wrong when connecting to database');
});


// Adds a one-time listener function for the event named eventName
db.once('open', () => {
    console.log('Database connection successful');
});


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())

app.use('/', homeRoute);
app.use(express.static('public'));


app.get('/', (req, res) => {
    // res.render('home', { name: "Adem K" });
    // res.send(express.static(path.join(__dirname, "index.html")));
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})