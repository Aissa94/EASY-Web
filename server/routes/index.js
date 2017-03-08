var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    //res.send('INDEX');
    res.render('index'); // view/index.ejs
});

module.exports = router;
