var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('fortune.html', { root: 'public' });
});


router.get('/getfortune', function(req, res, next) {
    fs.readFile(__dirname + '/fortunes.txt', function(err, data) {
        if (err) throw err;
        var fortunes = data.toString().split("\n");
        var first_fortune_idx = Math.floor(Math.random() * fortunes.length);
        var second_fortune_idx = Math.floor(Math.random() * fortunes.length);
        var third_fortune_idx = Math.floor(Math.random() * fortunes.length);
        var jsonresult = 'First you will ' + fortunes[first_fortune_idx] + 
        ', then ' + fortunes[second_fortune_idx] + ', then finally ' + 
        fortunes[third_fortune_idx];
        
        res.status(200).json(jsonresult);
        console.log(jsonresult);
    });
});
module.exports = router;
