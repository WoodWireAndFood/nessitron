/*
 * Store logged in user info
 */

exports.writeUser = function(req, res){
    var username = req.query.uname;
    var toWrite = '{"username": "' + username + '" }';
    console.log(toWrite);
    // var asJSON = JSON.parse(toWrite);
    var fs = require('fs');
    var info = JSON.parse(toWrite);
    fs.writeFile("user.json", JSON.stringify(info), 'utf8', function (){});
    res.render('home', info); // home here refers to views/home.handlebars
  }