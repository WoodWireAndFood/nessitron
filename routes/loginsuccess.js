/*
 * Store logged in user info and go to home
 */

exports.writeUser = function(req, res){
    var username = req.query.uname;
    var toWrite = '{"username": "' + username + '" }';
    console.log(toWrite);
    // var asJSON = JSON.parse(toWrite);
    var fs = require('fs');
    var info = JSON.parse(toWrite);
    fs.writeFile("user.json", JSON.stringify(info), 'utf8', function (){});
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
      info.emotionButtons = [
        {
          "emoButton": "<a href=\"enjoyment\" class=\"nostyle\"><button type=\"button\" class=\"list-group-item list-group-item-action btn-block emotion\" id=\"enjoyment\"><i class=\"far fa-smile-beam\"></i> Enjoyment</button></a>"
        },
        {
          "emoButton": "<a href=\"sadness\" class=\"nostyle\"><button type=\"button\" class=\"list-group-item list-group-item-action btn-block emotion\" id=\"sadness\"><i class=\"far fa-sad-tear\"></i> Sadness</button></a>"
        },
        {
          "emoButton": "<a href=\"fear\" class=\"nostyle\"><button type=\"button\" class=\"list-group-item list-group-item-action btn-block emotion\" id=\"fear\"><i class=\"far fa-flushed\"></i> Fear</button></a>"
        },
        {
          "emoButton": "<a href=\"anger\" class=\"nostyle\"><button type=\"button\" class=\"list-group-item list-group-item-action btn-block emotion\" id=\"anger\"><i class=\"far fa-angry\"></i> Anger</button></a>"
        },
        {
          "emoButton": "<a href=\"disgust\" class=\"nostyle\"><button type=\"button\" class=\"list-group-item list-group-item-action btn-block emotion\" id=\"disgust\"><i class=\"far fa-grin-tongue-squint\"></i> Disgust</button></a>"
        }];
    res.render('home', info); // home here refers to views/home.handlebars
  }