
/*
 * GET calendarMonth page.
 */

exports.view = function(req, res){
  var username = req.cookies.username;
  var info = {};
  info.navbarButtons = [
    {
      "aTag": "<a href=\"home\">",
      "buttonTag": "<button class=\"navButton\">",
      "icon": "<i class=\"fas fa-plus fa-3x\"></i>",
      "label": "Add Emotion"
    },
    {
      "aTag": "<a class=\"active\">",
      "buttonTag": "<button class=\"navButton\" disabled>",
      "icon": "<i class=\"far fa-calendar-alt fa-3x\"></i>",
      "label": "Calendar"
    },
    {
      "aTag": "<a href=\"journal\">",
      "buttonTag": "<button class=\"navButton\">",
      "icon": "<i class=\"far fa-file-alt fa-3x\"></i>",
      "label": "Journal"
    },
    {
      "aTag": "<a href=\"settings\">",
      "buttonTag": "<button class=\"navButton\">",
      "icon": "<i class=\"fas fa-cog fa-3x\"></i>",
      "label": "Settings"
    }];
  res.render('calendarMonth', info); // calendarMonth here refers to views/calendarMonth.handlebars
};