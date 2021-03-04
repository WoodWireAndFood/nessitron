/*
 * Store logged in user info and go to home
 */

exports.checkLogin = function(req, res){
    var jsonFilename = "users.json";
    var info = JSON.parse('{"loginMessage": "Invalid username or password. Please try again."}');
    var username = req.query.uname;
    var password = req.query.pword;
    var fs = require('fs');
    var raw = fs.readFileSync(jsonFilename, 'utf8');
    var fileInfo = JSON.parse(raw);
    //Check passwords match
    if (typeof(fileInfo.users[username]) == 'undefined') {
      console.log(username + " doesn't exist.");
      res.render('login', info);
    }
    else if (fileInfo.users[username].password == password){
      console.log("Successful login for " + username);
      res.cookie("username", username);
      res.render('loginsuccess'); // loginsuccess here refers to views/loginsuccess.handlebars which is a straight redirect to home
    }
    else {
      console.log("Failed login for " + username);
      res.render('login', info);
    }
  }