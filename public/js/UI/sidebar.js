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

// ScaleBar
$(function(){   
        $('#scaleBar').slider({
        range: "min",
        min: 0,
        max: 100,
        value: 100,
        animate: true,
        slide: function(event, ui) {
            var scale = ui.value * 0.01;
            pony.scale = scale;
            pony.spawnPony();
            console.log(pony);
            $("#scaleBar-percentage").text("Scale: "+ui.value + "%");
            
        }
    });
    
});

// Categories & Tabs
$('button.sidebarCat').click(function(e) {
    
    var page = $(this).attr('data-page');

    $('.sidebarCat').not('[data-page]').hide();
    $("#"+page).show();
    
    $('.sidebarCat[data-page]').removeClass("btn-success");
    $(this).addClass("btn-success");
    
})

$('button.sidebarTab').click(function(e) {
    
    var page = $(this).attr('data-page');
      
    $('.sidebarTab').not('[data-page]').hide();
    $("#"+page).show();
    
    $('.sidebarTab[data-page]').removeClass("btn-primary");
    $(this).addClass("btn-primary");
    
})
$(function() {
    $('.sidebarCat[data-page=ponyCat]').click();
    $('.sidebarTab[data-page=general]').click();
})

// Colorpicker for color of pony.
$(function(){
	$('#colorBody, #colorOutline').colorpicker({format: 'hex'});
});

// Set Colors
$('#setColors').on('submit', function(e) {
    console.log("sended");
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
   
   if(bgname == "custom")
    return false;
   
   background.url = bgname;
   
   pony.spawnPony();
    
});

$(function() {
    
    var width = 0;
    $('#bglist .bgcontainer a').each(function() {
        width += $(this).outerWidth( true );
    });
    $('#bglist .bgcontainer').css('width', width + "px");
    
    $("#bglist").mousewheel(function(e, d) {
      this.scrollLeft -= (d * 30);   
      e.preventDefault();
   });
    
    $('#bglist a[data-bgname=custom]').colorpicker({format: 'hex'}).on('hide', function(ev){
        $('#bglist a[data-bgname=custom]').attr("data-color", ev.color.toHex() ); 
    })
    .on('hide', function(){
        
      $('#bglist a[data-bgname=custom]').css("background-color", $('#bglist a[data-bgname=custom]').attr("data-color") );         
      background.url = $('#bglist a[data-bgname=custom]').attr("data-color");
      pony.spawnPony();
      
    });
    
})
