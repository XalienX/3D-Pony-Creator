///// Save /////

$('.saveJson').click(function() {
    
    if(pname.value == '' || author.value == '')
    {
        UI.makeAlert("Set Name and Author first!", "red");  
        $('#pname, #author').css('border', '1px solid red');
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
        $('#pname, #author').css('border', '1px solid red');
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
$('a.load').click(function(){
    $("#opacity").fadeIn('200');
    $("div#load").show();
    $("#infobox").show();
});



///// Help /////

$('a.about').click(function(){
    $("#opacity").fadeIn('200');
    $("div#about").show();
    $("#infobox").show();
});