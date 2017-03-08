var express = require('express');
var router = express.Router();
//var firebase = require('./firebase-config');

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

var user = {
    "name":
    {
        "first": null,
        "last": null
    },
    "age": null
};

// Test for the existence of certain keys within a DataSnapshot
var rootRef = firebase.database().ref();

rootRef.once("value")
       .then(function(snapshot) {
            user.name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
            user.name.first = snapshot.child("name/first").val(); // "Ada"
            user.name.last = snapshot.child("name").child("last").val(); // "Lovelace"
            user.age = snapshot.child("age").val(); // null
        });

function writeUserData(userId, userage, userfirst, userlast){
    rootRef.child('name/' + userId).set({
        age : userage,
        first : userfirst,
        last : userlast
    });
}


router.get('/members', function(req, res, next){
   res.send(user);
});

module.exports = router;