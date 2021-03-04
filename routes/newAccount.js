/*
 * GET new account page.
 */

exports.view = function(req, res){
  if (typeof(username) == 'undefined') { // Check for not logged in
    res.render('newAccount'); // newAccount here refers to views/newAccount.handlebars
  }
  else { // Already logged in, send them to home.
    res.render('home');
  }
};