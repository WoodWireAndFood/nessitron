/*
 * create new account
 */

exports.view = function(req, res){
    res.render('newAccount'); // newAccount here refers to views/newAccount.handlebars
  };

exports.addUsername = function(req, res) {
    var jsonFilename = "users.json";
    var username = req.query.uname; //TODO: maybe make post?
    var password = req.query.pword; //TODO: maybe make post?
    var fs = require('fs');
    var raw = fs.readFileSync(jsonFilename, 'utf8');
    var fileInfo = JSON.parse(raw);
    // Check if username exists
    console.log(fileInfo);
    if (typeof(fileInfo.users[username]) == 'undefined') {
      //Add and continue if it doesn't
      console.log("User " + username + " not found. Creating.");
      var newUserInfo = '{"password": "' + password + '","journal":[]}';
      fileInfo.users[username] = JSON.parse(newUserInfo);
      console.log(newUserInfo);
      fs.writeFileSync(jsonFilename, JSON.stringify(fileInfo), 'utf8');
      res.cookie("username", username);
      res.render('createAccount'); // newAccount here refers to views/newAccount.handlebars
    }
    else {
      //Update page with try again message
      console.log("Duplicate username: " + username + ".");
      var info = JSON.parse('{"usernameExists": "' + username + ' already exists. Please select a different username."}');
      console.log(info);
      res.render('newAccount', info);
    }
}