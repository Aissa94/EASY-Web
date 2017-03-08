var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//var firebaseApp = require('./routes/firebase-config');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//app.use('/firebase/',firebaseApp);
app.use('/',index);
app.use('/api/users',users);

app.listen(3000, function(){
    console.log('Server started on port 3000...');
})