
/**
 * Module dependencies.
 */


//Probably don't change these
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Add Routes Here (its a .js file)
var home = require('./routes/home');
var login = require('./routes/login');
var logout = require('./routes/logout');
var createAccount = require('./routes/createAccount');
var newAccount = require('./routes/createAccount');
var loginsuccess = require('./routes/loginsuccess');
var calendarDay = require('./routes/calendarDay');
var calendarMonth = require('./routes/calendarMonth');	
var calendarYear = require('./routes/calendarYear');
var journal = require('./routes/journal');
var settings = require('./routes/settings');
var enjoyment = require('./routes/enjoyment');
var sadness = require('./routes/sadness');
var fear = require('./routes/fear');
var anger = require('./routes/anger');
var disgust = require('./routes/disgust');
var savejournaldiscard = require('./routes/savejournaldiscard');

// Begin code I hope doesn't matter

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
// End code I hope doesn't matter

//Add app.get call 
app.get('/home', home.view);
app.get('/', login.view);
app.get('/login', login.view);
app.get('/logout', logout.logout);
app.get('/createAccount', createAccount.addUsername);
app.get('/newAccount', newAccount.view);
app.get('/authSucc', loginsuccess.writeUser);
app.get('/calendarDay', calendarDay.view);
app.get('/calendarMonth', calendarMonth.view);
app.get('/calendarYear', calendarYear.view);
app.get('/journal', journal.view);
app.get('/settings', settings.view);
app.get('/enjoyment', enjoyment.view);
app.get('/sadness', sadness.view);
app.get('/fear', fear.view);
app.get('/anger', anger.view);
app.get('/disgust', disgust.view);
app.get('/savejournaldiscard', savejournaldiscard.view);

//This looks important, don't change it?
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
