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
    
    function convertPonycode()
    {
        var c = $("#convertForm input[type=text]").val();
        
        //// Get colors..
        convertData.colorBody = c.substring(10,16);
        
        // Outline is 30% darker than color of Body or 25% lighter if colorBody has dark colors.
        
        var R = parseInt((cutHex(convertData.colorBody)).substring(0,2),16);          
        var G = parseInt((cutHex(convertData.colorBody)).substring(2,4),16); 
        var B = parseInt((cutHex(convertData.colorBody)).substring(4,6),16);
        
        if(R < 76 & G < 76 & B < 76)
         var outline = convertColors("#"+convertData.colorBody, 125);
        else
         var outline = convertColors("#"+convertData.colorBody, 30);
         
        R = outline[0].toString(16).length == 1 ? "0"+outline[0].toString(16) : outline[0].toString(16);
        G = outline[1].toString(16).length == 1 ? "0"+outline[1].toString(16) : outline[1].toString(16);
        B = outline[2].toString(16).length == 1 ? "0"+outline[2].toString(16) : outline[2].toString(16);
         
        convertData.colorOutline = "#" + R + G + B;
        
        //// Horn...
        
        if(c.substring(7,8) == 1)
        {
            convertData.hornType = 'normal';
        }
        else
        {
            convertData.hornType = 'off';
        }
        
        

    }
    
    return {
        loadFile : loadFile,
        convertPonycode : convertPonycode,
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

$('#convertForm').submit(function(e) {
    e.preventDefault();

    var ponycode = $("#convertForm input[type=text]").val();
    if (ponycode.length != 78) {
      UI.makeAlert('PonyCode isn\'t valid.', 'red');
      return;
    } 
    
    load.convertPonycode();
    
    pony.colorBody = colorBody.value = convertData.colorBody;  
    pony.colorOutline = colorOutline.value = convertData.colorOutline;  
    background.url = "#ffff98";
    pony.position[0] = -90;
    
    
    var radios = $('input:radio[name=horn]');
    radios.filter('[value='+convertData.hornType+']').attr('checked', true);
    pony.options['horn'] = convertData.hornType;
    
    $('#opacity').click();
    pony.spawnPony(pony.colorBody, pony.colorOutline);
    
    
    UI.makeAlert("Converted.", "green");  
    
});