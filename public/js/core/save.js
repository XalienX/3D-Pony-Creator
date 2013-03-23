var save = {};

save = (function(){
    
    function jsonSave(name, author)
    {
        var bb = new BlobBuilder();
        
        var positionText = $(".bodyPosition").text();
        var position=positionText.split(",");
        
        var colorBody = $(".colorBody").text();
        var colorOutline = $(".colorOutline").text(); 
        
        var output = '{"name":"'+name+'","author":"'+author+'","position":{"x":"'+position[0]+'","y":"'+position[1]+'","z":"'+position[2]+'"},"colorBody":"'+colorBody+'","colorOutline":"'+colorOutline+'","bgname": "'+background.url+'"}';
        bb.append(output);
     
        var blob = bb.getBlob("application/xhtml+xml;charset=" + document.characterSet);
        saveAs(blob, name+"_by_"+author+".json");

    }
    
    function canvasExport(name, author, callback)
    {
        pony.spawnPony({"drawcanvas": 1}, function(){
         flash();
         canvas.toBlob(function(blob) {
         saveAs(blob, name+"_by_"+author+"_export.png");
         pony.spawnPony({"drawcanvas": 0});
         if(typeof(callback) != "undefined")
          callback();
         });             
        });

    }    
    
    return {
        jsonSave : jsonSave,
        canvasExport : canvasExport,
    }
    
})();