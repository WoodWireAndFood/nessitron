
/*
 * GET login page.
 */

exports.view = function(req, res){
  var username = req.cookies.username;
  if (typeof(username) == 'undefined') { // Check for not logged in
    res.render('login'); // login here refers to views/login.handlebars
  }
  else { // Already logged in, send them to home.
    res.render('loginsuccess'); // login here refers to views/loginsuccess.handlebars
  }
};