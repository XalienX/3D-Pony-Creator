
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , compressor = require('node-minify');
  
  
var app = express();

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


// Using YUI Compressor for CSS
new compressor.minify({
    type: 'yui-css',
    fileIn: [
        'public/css/main.css', 
        'public/css/jquery.ui.css', 
        'public/css/colorpicker.css', 
        'public/bootstrap/css/bootstrap.min.css', 
        'public/bootstrap/css/bootstrap-responsive.min.css'
    ],
    fileOut: 'public/css/minify.css',
    callback: function(err){
        if(!err)
        console.log("Minified CSS Files.")
        else
        console.log(err);
    }
});

// Using YUI Compressor for JS
new compressor.minify({
    type: 'yui-js',
    fileIn: [
        'public/js/core/main.js',
        'public/js/jquery/plugins/spin.min.js',
        'public/bootstrap/js/bootstrap.min.js',
        'public/bootstrap/js/bootstrap-colorpicker.js',
        'public/js/UI/interface.js',
        'public/js/UI/sidebar.js',
        'public/js/UI/menu.js',
        'public/js/UI/fullscreen.js',
        'public/js/core/functions.js',
        'public/js/core/spawner.js',
        'public/js/core/save.js',
        'public/js/core/load.js',
        'public/js/core/selector.js',
        'public/js/filesaver/FileSaver.min.js',
        'public/js/filesaver/BlobBuilder.min.js',
        'public/js/filesaver/canvas2blob.min.js',
	],
    fileOut: 'public/js/minify.js',
    callback: function(err){
        if(!err)
        console.log("Minified JS Files.")
        else
        console.log(err);
    }
});

// Using YUI Compressor for JS
new compressor.minify({
    type: 'yui-js',
    fileIn: [
        'public/mdls/normal/body/front.js', 
        'public/mdls/normal/body/frontright.js',
        'public/mdls/normal/body/right.js',
        'public/mdls/normal/body/bottomright.js',
        'public/mdls/normal/body/bottom.js',
        'public/mdls/normal/body/bottomleft.js',
        'public/mdls/normal/body/left.js',
        'public/mdls/normal/body/frontleft.js',
        
        'public/mdls/normal/horn/normal.front.js', 
        'public/mdls/normal/horn/normal.frontright.js',
        'public/mdls/normal/horn/normal.right.js',
        'public/mdls/normal/horn/normal.bottomright.js',
        'public/mdls/normal/horn/normal.bottom.js',
        'public/mdls/normal/horn/normal.bottomleft.js',
        'public/mdls/normal/horn/normal.left.js',
        'public/mdls/normal/horn/normal.frontleft.js',
    ],
    fileOut: 'public/mdls/minify.js',
    callback: function(err){
        if(!err)
        console.log("Minified Model Files.")
        else
        console.log(err);
    }
});


app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

process.on('uncaughtException', function (err) {
  console.log("Something went Wrong!");
  console.error(err);
});