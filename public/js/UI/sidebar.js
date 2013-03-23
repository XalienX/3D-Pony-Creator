
// Set Colors
$('#setColors').submit(function(e) {
  e.preventDefault();
  
    if(colorBody.value != "")
        pony.colorBody = colorBody.value;        
    else
        colorBody.value = pony.colorBody;
    
    if(colorOutline.value != "")
    	pony.colorOutline = colorOutline.value;
    else
        colorOutline.value = pony.colorOutline;
        
    if(/^#[0-9A-F]{6}$/i.test(pony.colorBody) === false || /^#[0-9A-F]{6}$/i.test(pony.colorOutline) === false)
    {
        UI.makeAlert("Incorrect Atributes!", "red");
    }
    else if(pony.colorBody == pony.colorOutline)
    {
        UI.makeAlert("Values are identical!", "red");  
    }
    else
    {            
       pony.spawnPony();
       UI.makeAlert("Colors changed.", "green");              
    }
            
  return true;
});

// Pony Options
$("#ponyOptions input[type=radio]").change(function(){
    var name = this.name;
    var value = this.value;   
    
    pony.options[name] = value;
        
    pony.spawnPony();
    
});

// Background List
$("#bglist a").click(function(e){
   e.preventDefault;
   
   
   var bgname = $(this).attr("data-bgname");
   
   background.url = bgname;
   
   $('#spin').show().spin(opts);
   //resize()
   pony.spawnPony();
    
});

// Transform
$("#transform form").submit(function(e){
    e.preventDefault();
    
    var x = $("input[name=X]").val();
    var y = $("input[name=Y]").val();
    var scale = $("input[name=scale]").val();
    
    pony.translate = [x, y];
    pony.scale = scale;
    
    pony.spawnPony();  
    
    UI.makeAlert("Transformed.", "green");
    
    return true;
});

// Change Position
$("#positionBtns form input").click(function(e){
    e.preventDefault();
    
    if($(this).attr('name') == "left")
    {
       pony.position[0] -= 45; 
       if(pony.position[0] <= -180)
        pony.position[0] = 180;
    }
    else if($(this).attr('name') == "center")
    {
       pony.position[0] = 0;   
    }
    else if($(this).attr('name') == "right") 
    {
       pony.position[0] += 45; 
       if(pony.position[0] > 180)
        pony.position[0] = -135;      
    }
    
   pony.spawnPony();   
   
});

