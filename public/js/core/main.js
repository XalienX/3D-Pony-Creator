document.getElementById('loadInput').addEventListener('change', load.loadFile, false);

var opts = {
  lines: 15, // The number of lines to draw
  length: 3, // The length of each line
  width: 2, // The line thickness
  radius: 9, // The radius of the inner circle
  corners: 0, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  color: '#C763C7', // #rgb or #rrggbb
  speed: 1.7, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: true, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

$(function(){
    
    resize();
        
    var waittemp=0;
    window.setInterval( function() {   
        if ( waittemp < 3 )
        {
            waittemp+=1;
            $('.wait').append('.');
        }
        else
        {
            waittemp=0;
         $('.wait').html("");
        }    
    },2000);
            
    window.onresize = resize;
      
    function resize(){
        $('#menu').css({width: window.innerWidth-40+"px"});
        if(window.innerWidth > 1275)
        {
            canvasWidth = window.innerWidth - 297;
            $('#ctx').attr({width: canvasWidth+"px", height: window.innerHeight});
        }
        else if(window.innerWidth < 1275 & canvasWidth > 986)
        {
            canvasWidth = 986;
            $('#ctx').attr({width: canvasWidth+"px", height: window.innerHeight});            
        }
        if(typeof(pony) == "object")
            pony.spawnPony(); 
    }
        
});

$('#debugbtn').click(function(){
    
    $("#debug").slideToggle('2000', "easeOutQuint");
    
    if( $(this).css('bottom') == '196px' )
      $(this).animate({bottom: "0px"}, '2000', "easeOutQuint");
    else
      $(this).animate({bottom: "196px"}, '2000', "easeOutQuint");
     
});

$('#opacity').click(function(){
    $("#opacity").fadeOut('200');
    $("#infobox").hide();
    $("div.box").hide();
});

// Keyboard Shorts
$(document).keyup(function(e)
{
    console.log("Clicked: "+e.keyCode);
    
    // Moving
    if(e.keyCode == 37)
    $("#positionBtns button#posleft").click();
    else if(e.keyCode == 39)
    $("#positionBtns button#posright").click();
    else if(e.keyCode == 96)
    $("#positionBtns button#poscenter").click();
    
    // Export to PNG
    else if(e.keyCode == 44)
    {
        e.preventDefault();
        $('.exportPNG').click();
    }
});
