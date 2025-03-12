const express = require('express');

const app = express();
const session = require('express-session');

const layouts = require('express-ejs-layouts');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


//monggoose
require("./config/db");
const Contact = require("./model/Contact");

const bodyParser = require('body-parser');

//routes
const auth = require('./routes/auth');
const index = require('./routes/index');

app.set('view engine', 'ejs');
// use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/auth', auth); 
app.use('/',index);

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});