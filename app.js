
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , app = express()
  , http = require('http').createServer(app)
  , path = require('path')
  , config = require("./config.json")
  , io = require('socket.io').listen(http, { 'log level': 1, 'tranports': ['jsonp-polling','xhr-polling', 'websocket']})
  , fs = require('fs')
  , events = require('events');

app.configure(function(){
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

io.sockets.on('connection', function(client){
    
    client.on('save',function(file){
        fs.writeFile(config.gallery.directory+file.name,file.buffer, function(err){
          if(err){
            console.log('File could not be saved.');
          }else{
            console.log('File saved.');
          };
        });
    });
  
});

http.listen(app.get('port'), function(){
  console.log("Server listening on port " + app.get('port'));
});

process.on('uncaughtException', function (err) {
  console.log("Something went Wrong!");
  console.error(err);
});