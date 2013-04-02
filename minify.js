var compressor = require('node-minify')
  , config = require("./config.json");
  
console.log("========================")
console.log("Minify for CSS/JS Files.")
console.log("========================")
console.log("Minifing Files...");

new compressor.minify({
    type: config.compress.CSS,
    fileIn: [
        'public/css/main.css', 
        'public/css/jquery.ui.css', 
        'public/css/colorpicker.css', 
        'public/bootstrap/css/bootstrap.min.css', 
        'public/bootstrap/css/bootstrap-responsive.min.css'
    ],
    fileOut: 'public/css/minify.css',
    tempPath: config.compress.tmpdir,
    callback: function(err){
        if(!err)
        {
            console.log("Minified CSS Files.")
        }
        else
        {
            console.log(err);
            throw new Error("Minifing CSS Files - FAILED");
        }
    }
});

new compressor.minify({
    type: config.compress.JS,
    fileIn: [
        'public/js/core/errorhandler.js',
        'public/js/core/main.js',
        'public/js/jquery/plugins/spin.min.js',
        'public/js/jquery/plugins/jquery.mousewheel.min.js',
        'public/bootstrap/js/bootstrap.min.js',
        'public/bootstrap/js/bootstrap-colorpicker.js',
        'public/js/UI/interface.js',
        'public/js/UI/sidebar.js',
        'public/js/UI/menu.js',
        'public/js/UI/fullscreen.js',
        'public/js/UI/keyboard.js',
        'public/js/core/functions.js',
        'public/js/core/spawner.js',
        'public/js/core/save.js',
        'public/js/core/load.js',
        'public/js/core/server.js',
        'public/js/core/selector.js',
        'public/js/filesaver/FileSaver.min.js',
        'public/js/filesaver/BlobBuilder.min.js',
        'public/js/filesaver/canvas2blob.min.js',
    ],
    fileOut: 'public/js/minify.js',
    tempPath: config.compress.tmpdir,
    callback: function(err){
        if(!err)
        {
            console.log("Minified JS Files.")
        }
        else
        {
            console.log(err);
            throw new Error("Minifing JS Files - FAILED");
        }
    }
});
new compressor.minify({
    type: config.compress.JS,
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
        
        //'public/mdls/normal/wings/normal.front.js', 
        //'public/mdls/normal/wings/normal.frontright.js',
        //'public/mdls/normal/wings/normal.right.js',
        //'public/mdls/normal/wings/normal.bottomright.js',
        //'public/mdls/normal/wings/normal.bottom.js',
        //'public/mdls/normal/wings/normal.bottomleft.js',
        //'public/mdls/normal/wings/normal.left.js',
        //'public/mdls/normal/wings/normal.frontleft.js',
    ],
    fileOut: 'public/mdls/minify.js',
    tempPath: config.compress.tmpdir,
    callback: function(err){
        if(!err)
        {
            console.log("Minified Model Files.")
        }
        else
        {
            console.log(err);
            throw new Error("Minifing Model Files - FAILED");
        }
    }
});