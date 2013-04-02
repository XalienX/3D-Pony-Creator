// Keyboard Shorts
$(document).keyup(function(e)
{    
    e.preventDefault();
    
    // Moving
    if(e.keyCode == 37)
    $("#positionBtns form input[type=submit][name=left]").click()
    else if(e.keyCode == 39)
    $("#positionBtns form input[type=submit][name=right]").click()
    else if(e.keyCode == 36)
    $("#positionBtns form input[type=submit][name=center]").click()
    
    // Show Keyboard Shortcuts Legend
    else if(e.keyCode == 112)
        $('a.shortcutsLegend').click();

    // Export to PNG
    else if(e.keyCode == 44 | e.keyCode == 123)
        $('.exportPNG').click();
});

var keys = [];
var konami  = '38,38,40,40,37,39,37,39,66,65';
$(document)
.keydown(
        function(e) {
                keys.push( e.keyCode );
                if ( keys.toString().indexOf( konami ) >= 0 ){
                        location.href="http://fiction.mlppolska.pl/bestpony.html";
                        keys = [];
                }
        }
);