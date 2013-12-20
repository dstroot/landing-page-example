var express         = require('express');
var http            = require('http');
var path            = require('path');
var lessMiddleware  = require('less-middleware');    // https://npmjs.org/package/less-middleware

var app = express();
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

/* =================================================
 Set it up (Middleware)
=================================================== */
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, '')));
app.use(express.errorHandler());

/* =================================================
 Start it up!
=================================================== */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});