///// Save /////

$('.saveJson').click(function() {
    
    if(pname.value == '' || author.value == '')
    {
        UI.makeAlert("Set Name and Author first!", "red");  
        $('#pname, #author').css({backgroundColor: "#F99"});
        setTimeout(function() {
            $('#pname, #author').removeAttr('style');
        }, 4000);
    } 
    else
    {
        UI.makeAlert("Saved!", "green");  
        $('#pname, #author').css('border', 'none');
        save.jsonSave(pname.value, author.value);
    }
});

$('.exportPNG').click(function() {
    
    if(pname.value == '' || author.value == '')
    {
        UI.makeAlert("Set Name and Author first!", "red");  
        $('#pname, #author').animate({backgroundColor: "#F99"}, 300);
        setTimeout(function() {
            $('#pname, #author').animate({backgroundColor: ""}, 300);
        }, 4000);
    } 
    else
    {
        $('#pname, #author').css('border', 'none');
        save.canvasExport(pname.value, author.value, function(){
            UI.makeAlert("Exported!", "green");  
        });
        
    }
});

///// Load /////

$('.jsonLoad').click(function(){
    $("#opacity").fadeIn('200');
    $("div#load").show();
    $("#infobox").show();
});

$('.ponycodeConvert').click(function() {
    UI.makeAlert("In progress, come back later!", "green");
});

///// View /////

$('.hideSidebar').click(function(){
    
   if( $("#sidebar").css('display') == "none" )
   {
        $(this).children('i').removeClass("icon-ok");
        $("#sidebar").css('display', 'block');
        resize();
   }
   else
   {
        $(this).children('i').addClass("icon-ok");
        $("#sidebar").css('display', 'none');
        
        if( $(this).css('bottom') == '196px' )
         $(this).animate({bottom: "0px"}, '2000', "easeOutQuint");
        else
        $(this).animate({bottom: "196px"}, '2000', "easeOutQuint");
        
        resize();
   }
   
});

$('.enableFullscreen').click(function(){

    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !==     null) ||    // alternative standard method  
            (document.mozFullScreen || document.webkitIsFullScreen);

    
   if( !isInFullScreen )
   {
        $(this).children('i').addClass("icon-ok");
        doFullscreen(1);
   }
   else
   {
        $(this).children('i').removeClass("icon-ok");
        doFullscreen(0);
   }
   
});


///// Help /////

$('a.about').click(function(){
    $("#opacity").fadeIn('200');
    $("div#about").show();
    $("#infobox").show();
});