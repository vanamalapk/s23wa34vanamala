var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.floor(Math.random()*10)
        y=Math.floor(Math.random()*5);
        let result = Math.log2(x);
        let result2 = Math.cosh(x);
        let result3= Math.floor(y);
        res.send('Math.log2() applied for' +x +'is' +result+'\n Math.cosh() applied for' +x +'is' +result2+'\n Math.floor() applied for number' +y+'is'+result3);
    }
    else{
        x =req.query.x;
        let result = Math.log2(x);
        let result2 = Math.cosh(x);
        let result3= Math.floor(y);
        res.send('Math.log2() applied for' +x +'is' +result+'\n Math.cosh() applied for' +x +'is' +result2+'\n Math.floor() applied for number' +y+'is'+result3);
    }
});

module.exports = router;
