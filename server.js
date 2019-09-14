//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const dotenv = require('dotenv');
const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;


dotenv.config();
console.log(dotenv);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const FINAL_DB = process.env.FINAL_DB

// const citiesController = require('./controllers/cities.js');
// app.use('/cities', citiesController);

// Error / success
mongoose.connect(FINAL_DB, {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', FINAL_DB));
db.on('disconnected', () => console.log('mongo disconnected'));
app.listen(PORT, () => {
  console.log('listening');
})
