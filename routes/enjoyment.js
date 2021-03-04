/*
 * GET enjoyment page.
 */

exports.view = function(req, res){
  var username = req.cookies.username;
  var info = {};
  info.navbarButtons = [
    {
      "aTag": "<a class=\"active\">",
      "buttonTag": "<button class=\"navButton\" id=\"addEmotion\" disabled>",
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
      "aTag": "<a href=\"settings\">",
      "buttonTag": "<button class=\"navButton\">",
      "icon": "<i class=\"fas fa-cog fa-3x\"></i>",
      "label": "Settings"
    }];
  res.render('enjoyment', info); // enjoyment here refers to views/enjoyment.handlebars
};