
/*
 * GET home page.
 */

exports.view = function(req, res){
  var fs = require('fs');
  var raw = fs.readFileSync('user.json', 'utf8');
  console.log(raw);
  var info = JSON.parse(raw);
  res.render('home', info); // home here refers to views/home.handlebars
};