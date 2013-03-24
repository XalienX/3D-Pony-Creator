var models = [
    'mdls/front.js', 
    'mdls/frontright.js',
    'mdls/horn.front.js',
];

var canvas = document.getElementById('ctx');
var ctx = canvas.getContext('2d');  

var background = (function()
{   
    function draw(ctx, usecanvas, callback) {    
      
      
      if(typeof(usecanvas) != "undefined" & usecanvas == 1)
      {
          console.log(usecanvas);
            if(/^#[0-9A-F]{6}$/i.test(background.url) === true)
            {
                ctx.fillStyle = background.url;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                if(typeof(callback) != "undefined")
                  callback();
                
                $('#spin').hide();
            }
            else if(background.url == "transparent")
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
                if(typeof(callback) != "undefined")
                  callback();
                $('#spin').hide();
            }
            else
            {
              var img = new Image();
              img.onload = function(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
                ctx.drawImage(img,0,0);
                if(typeof(callback) != "undefined")
                  callback();
                
                $('#spin').hide();
              };
              img.src = 'img/bgs/'+background.url+'.png';
            }
      }
      else
      {
          
        if(/^#[0-9A-F]{6}$/i.test(background.url) === true)
        {
            if( $("#ctx").css('background') != background.url)
            {
             $("#ctx").css('background-color', background.url); 
             $("#ctx").css('background-image', 'none');
            }
        }
        else if(background.url == "transparent")
        {
            if( $("#ctx").css('background-image') != 'url('+window.location.origin+'/img/grid.png)')
            {
             $("#ctx").css('background-color', 'none');
             $("#ctx").css('background-image', 'url(../img/grid.png)');
            }
        }
        else
        {
            if( $("#ctx").css('background-image') != 'url('+window.location.origin+'/img/bgs/'+background.url+'.png)')
            {
             $("#ctx").css('background-color', 'none');
             $("#ctx").css('background-image', 'url(img/bgs/'+background.url+'.png)');
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        if(typeof(callback) != "undefined")
        {
          callback();
        }
        $('#spin').hide();
      }
      
      
    } 
    
    return {
        draw : draw,
        url : 'SAA',
    }
    
})();

pony = (function()
{
    var R,G,B;
    
    
    function spawnPony(options, callback)
    {
        try
        {
            
            if(typeof(options) == "undefined")
              var options = {};
              
            if(typeof(options.colorBody) == "undefined")
             var colorBody = pony.colorBody;
            else
             var colorBody = pony.colorBody = options.colorBody;
            
            if(typeof(options.colorOutline) == "undefined")
             var colorOutline = pony.colorOutline;
            else
             var colorBody = pony.colorOutline  = options.colorOutline;
            
            if(typeof(options.position) == "undefined")
             var position = pony.position;
            else
             var position = pony.position = options.position;
            
            if(typeof(options.drawcanvas) == "undefined")
             var drawcanvas = pony.drawcanvas
            else
             var drawcanvas = pony.drawcanvas = options.drawcanvas;
            
            if(typeof(colorBody) == "object")
            {
                R = parseInt((cutHex(colorBody[1])).substring(0,2),16);          
                G = parseInt((cutHex(colorBody[1])).substring(2,4),16); 
                B = parseInt((cutHex(colorBody[1])).substring(4,6),16);
            }
            else
            {
                // Shade of body is 68% darker than non-shade color of body (in RGB)
                var colors = convertColors(colorBody);
                
                R = colors[0];
                G = colors[1];
                B = colors[2];
            }
            
            if(typeof(position) != "object")
                position = pony.position;
            
            
            
            $(".bodyPosition").text(position[0]+','+position[1]+','+position[2]);
            
            $(".colorBody").css('color', colorBody).text(colorBody);
            $(".colorOutline").css('color', colorOutline).text(colorOutline);
            
            
            if(position[0] == 0)
            {
                $(".bodyPositionText").text('Front');
                background.draw(ctx,drawcanvas,function(){
                    drawBody.front(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                         for(i in options)
                         {
                          if(options[i] == "off") break;
                          eval(i+"."+options[i]+".front(ctx)");
                         }
                         
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                            
                        
                        
                    });
                    
                });
                
            }
            else if(position[0] == -45)
            {
                 $(".bodyPositionText").text('Front-Left');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.frontleft(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".frontleft(ctx)");
                        }
                        
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                            
                            
                    });
                    
                });
            }
            else if(position[0] == -90)
            {
                 $(".bodyPositionText").text('Left');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.left(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".left(ctx)");
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            else if(position[0] == -135)
            {
                 $(".bodyPositionText").text('Bottom-Left');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.bottomleft(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".bottomleft(ctx)");
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            else if(position[0] == 180)
            {
                 $(".bodyPositionText").text('Bottom');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.bottom(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".bottom(ctx)");
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            else if(position[0] == 135)
            {
                 $(".bodyPositionText").text('Bottom-Right');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.bottomright(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".bottomright(ctx)");    
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            else if(position[0] == 90)
            {
                 $(".bodyPositionText").text('Right');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.right(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".right(ctx)");
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            else if(position[0] == 45)
            {
                 $(".bodyPositionText").text('Front-Right');
                background.draw(ctx,drawcanvas,function(){
                    
                    drawBody.frontright(ctx, colorBody, "rgb("+R+","+G+","+B+")", colorOutline, "", function(){
                        var options = pony.options;
                        
                        for(i in options)
                        {
                         if(options[i] == "off") break;
                         eval(i+"."+options[i]+".frontright(ctx)");
                        }
                        
                        if(typeof(callback) != "undefined" & typeof(callback) != "string")
                            callback();
                        
                    });
                    
                });
            }
            
                
        }
        catch(e)
        {
            errorHandler.writeDebug(e.message,2,'spawner.js - spawnPony()',1)
            errorHandler.writeDebug("==== STACKTRACE ====", 2);
            errorHandler.writeDebug("<pre>"+e.stack+"</pre>",2);
            errorHandler.writeDebug("==== STACKTRACE END ====", 2);
            $('#spin').hide();
        }
         
    }
    
    return {
        spawnPony : spawnPony,
        colorBody: "#D3A4E8",
        colorOutline: "#A067B4",
        position: [0,0,0],
        options: {},
        translate: [0, 0],
        scale: 1,
        drawcanvas: 0,
    }
    
    
})();

var canvasWidth;
if(window.innerWidth > 1275)
{
    canvasWidth = window.innerWidth - 297;
    $('#ctx').attr({width: canvasWidth, height: window.innerHeight});
}
else if(window.innerWidth < 1275 & canvasWidth > 986)
{
    canvasWidth = 986;
    $('#ctx').attr({width: canvasWidth, height: window.innerHeight});            
}

$('#spin').spin(opts);
Modernizr.load(
{
        load: models,
        complete: function()
        {
            errorHandler.writeDebug('Models has been loaded');
            pony.spawnPony();
            
        }
        
});
