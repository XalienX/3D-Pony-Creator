
var Alerts, R, G, B;

var loadData = {},
    convertData = {};

function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}


function intervalaction()
{
       
    if(colorOutline.value.charAt(0) != "#" & colorOutline.value.charAt(0) != "")
                    colorOutline.value = "#" + colorOutline.value;
                    
    if(colorOutline.value.length > 7)
        colorOutline.value = colorOutline.value.slice(0, -1);
        
    if(colorOutline.value.charAt(1) == "#")
        colorOutline.value = colorOutline.value.slice(1);
        
    if(colorBody.value.charAt(1) == "#")
        colorBody.value = colorBody.value.slice(0, -1);
        
    if(colorBody.value.charAt(0) != "#" & colorBody.value.charAt(0) != "")
        colorBody.value = "#" + colorBody.value;
                        
    if(colorBody.value.length > 7)
        colorBody.value = colorBody.value.slice(0, -1);
                        
}
setInterval("intervalaction();", 10);

function convertColors(hex,percent)
{
    
    if(typeof(percent) == "undefined")
     var percent = 68;
     
    
    if(typeof(hex) == "object") // It's Array - Already converted colors to RGB
    {
        var R = hex[0];
        var G = hex[1];
        var B = hex[2];
    }
    else
    {
        var R = parseInt((cutHex(hex)).substring(0,2),16);          
        var G = parseInt((cutHex(hex)).substring(2,4),16); 
        var B = parseInt((cutHex(hex)).substring(4,6),16);
    }
    

    R = Math.round(R*percent/100);
    G = Math.round(G*percent/100);
    B = Math.round(B*percent/100);
    
        
    return new Array(R,G,B);
    
}

function flash(e){
             
     $('#flashbox')
         .show()  //show the hidden div
         .animate({opacity: 0.9}, 300) 
         .fadeOut(2000)
         .css({'opacity': 1});
}
