/*
 * Store logged in user info and go to home
 */

exports.writeUser = function(req, res){
    var username = req.query.uname;
    res.cookie("username", username);
    res.render('loginsuccess'); // loginsuccess here refers to views/loginsuccess.handlebars which is a straight redirect to home
  }