var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var defaultAppConfig = {
    apiKey: "AIzaSyDyBR9jBfFUwFEonlvnriNCJfm1VzZoR8M",
    authDomain: "test-c3928.firebaseapp.com",
    databaseURL: "https://test-c3928.firebaseio.com",
    storageBucket: "test-c3928.appspot.com",
    messagingSenderId: "709967017535"
}

// Initialize the default app
firebase.initializeApp(defaultAppConfig);
var database = firebase.database();

router.get('/config',function(req, res, next){
    res.send(database.app);
});

module.exports = router;
