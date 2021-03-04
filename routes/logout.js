/*
 * Log user out and go to login page
 */

exports.logout = function(req, res){
    res.clearCookie("username");
    res.render('loginRedirect'); // loginRedirect is a straight redirect to login
  }