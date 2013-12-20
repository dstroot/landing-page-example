
/**
 * Module dependencies.
 */

var express         = require('express');
var http            = require('http');
var path            = require('path');
var lessMiddleware  = require('less-middleware');    // https://npmjs.org/package/less-middleware

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

/* =================================================
 Complile the LESS code to CSS
=================================================== */
app.use(lessMiddleware({
   dest: __dirname + '/css'
 , src: __dirname + '/less'
 , prefix: '/css'
 , compress: true
 , debug: false
}));

app.use(express.favicon());
app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(app.router);
app.use(express.static(path.join(__dirname, '')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
