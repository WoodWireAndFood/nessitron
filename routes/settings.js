
/*
 * GET settings page.
 */

exports.view = function(req, res){
  var info = {};
  info.navbarButtons = [
    {
      "aTag": "<a href=\"home\">",
      "buttonTag": "<button class=\"navButton\">",
      "icon": "<i class=\"fas fa-plus fa-3x\"></i>",
      "label": "Add Emotion"
    },
    {
      "aTag": "<a href=\"calendarMonth\">",
      "buttonTag": "<button class=\"navButton\">",
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
      "aTag": "<a class=\"active\">",
      "buttonTag": "<button class=\"navButton\" disabled>",
      "icon": "<i class=\"fas fa-cog fa-3x\"></i>",
      "label": "Settings"
    }];
  res.render('settings', info); // settings here refers to views/settings.handlebars
};