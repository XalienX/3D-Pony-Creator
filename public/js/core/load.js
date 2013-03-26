var load = (function(){
    function loadFile() {

    var files = document.getElementById('loadInput').files;
    
    var file = files[0];
    var start = 0;
    var stop = file.size - 1;

    var reader = new FileReader();

    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { 
      
        try
        {
            var output = JSON.parse(evt.target.result);
            
            if(typeof(output.name) != "undefined")
             loadData.name = output.name;
            else throw "Invalid File (name)";
            
            if(typeof(output.author) != "undefined")
            loadData.author = output.author;
            else throw "Invalid File (author)";
            
            if(typeof(output.position) != "undefined")
            loadData.position = output.position;
            else throw "Invalid File (position)";
            
            if(typeof(output.colorBody) != "undefined")
            loadData.colorBody = output.colorBody;
            else throw "Invalid File (colorBody)";
            
            if(typeof(output.colorOutline) != "undefined")
            loadData.colorOutline = output.colorOutline;
            else throw "Invalid File (colorOutline)";
            
            if(typeof(output.bgname) != "undefined")
            loadData.bgname = output.bgname;
            else throw "Invalid File";
            
            loadData.valid = 1;
            
            $("#loadPreview").text('');
            $("#loadPreview").append("<p>Name: "+output.name+"</p>");
            $("#loadPreview").append("<p>Author: "+output.author+"</p>");
            $("#loadPreview").append("<p>Position: "+output.position.x+","+output.position.y+","+output.position.z+"</p>");
            $("#loadPreview").append('<p>ColorBody: <span style="color: '+output.colorBody+';">'+output.colorBody+'</span></p>');
            $("#loadPreview").append('<p>ColorOutline: <span style="color: '+output.colorOutline+';">'+output.colorOutline+'</span></p>');
            $("#loadPreview").append('<p>Background Name: '+output.bgname+'</p>');
        }
        catch(e)
        {
             $("#loadPreview").html("<p style=\"color: red;\">Invalid File!</p>"+e);
             loadData.valid = 0;
        }
        
      }
    };
    reader.readAsBinaryString(file);
    }
    
    return {
        loadFile : loadFile,
    }
})();
document.getElementById('loadInput').addEventListener('change', load.loadFile, false);

$('#loadSave').submit(function(e) {
    e.preventDefault();
    
    var files = document.getElementById('loadInput').files;
    if (!files.length || loadData.valid == 0) {
      UI.makeAlert('Please select a valid file!', 'red');
      return;
    } 
    
    pony.colorBody = colorBody.value = loadData.colorBody;  
    pony.colorOutline = colorOutline.value = loadData.colorOutline;  
    pname.value = loadData.name;
    author.value = loadData.author;   
    background.url = loadData.bgname;
    $('#opacity').click();
    pony.spawnPony(pony.colorBody, pony.colorOutline);
    
    
    UI.makeAlert("Loaded.", "green");  
    
});