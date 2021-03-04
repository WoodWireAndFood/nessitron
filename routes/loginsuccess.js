/*
 * Store logged in user info and go to home
 */

exports.writeUser = function(req, res){
    var username = req.query.uname;
    res.cookie("username", username);
    // var toWrite = '{"username": "' + username + '" }';
    // console.log(toWrite);
    // var fs = require('fs');
    // var info = JSON.parse(toWrite);
    // fs.writeFile("user.json", JSON.stringify(info), 'utf8', function (){});
    // sessionStorage("username", username);
    res.render('loginsuccess'); // loginsuccess here refers to views/loginsuccess.handlebars which is a straight redirect to home
  }