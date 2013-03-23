UI = {};

UI = (function(){
    
    function makeAlert(msg, type)
    {
        $("#alerts div").fadeOut(300); 
        $("#alerts").html("<div class=\""+type+" Alert\" style=\"display: none;\">"+msg+"</div>");
        $("#alerts .Alert").fadeIn(200, function(){
           $("#alerts .Alert").delay(2000).fadeOut(300);              
        });
    }
    
	var assets = {
		"test": "derp"
	};
    
    return {
        makeAlert : makeAlert,
		assets: assets
    }

})();

