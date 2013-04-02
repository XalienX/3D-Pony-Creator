var scripts = ['js/minify.js'];
for(var i in scripts)
{
    Modernizr.load({ 
        load: [
            scripts[i]
        ],
    	complete: function(){						
    		clearInterval(dots);
            $('#loader').remove();	
    	}								
    });
}

