errorHandler = (function(){
	function fatal(msg)
	{
		$('#xalert span').text('Fatal Error');
		$('#xalert span.desc').text(msg);
		$('#xalert').show();
	}
    
    function writeDebug(msg, type, file)
    {
        var extraClass="";
        
        if( typeof(file) != "undefined" || file == '')
            var file='<span class="right">'+file+'</span>';
        else
            var file='';
        
        switch (type) {
            case 1:
                console.warn(msg);
               extraClass="warn";
               break;
            case 2:
                console.error(msg);
                extraClass="error";
                
                if( $("#debugbtn").css('bottom') != '196px' )
                  $("#debugbtn").animate({bottom: "196px"}, '2000', "easeOutQuint");
                $("#debug").slideDown('2000', "easeOutQuint");
                break;
            default:
                console.log(msg);
                break;
        }
        $("#debug").append('<span class="log '+extraClass+'">'+msg+file+'</span>');
    }
    
	return {
		fatal : fatal,
        writeDebug : writeDebug,
    }
})();	