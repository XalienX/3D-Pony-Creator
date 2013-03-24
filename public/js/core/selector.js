var positions = {
    "front": [268,163,255,561]  
};
var canmove=0;
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

$(function(){
        
    canvas.addEventListener('mousemove', function(evt) {   
        var mousePos = getMousePos(canvas, evt);
                
        if( mousePos.x >  pony.translate[0]+(positions.front[0])*pony.scale & 
            mousePos.x <  pony.translate[0]+(positions.front[0]+positions.front[2])*pony.scale &
            mousePos.y >  pony.translate[1]+(positions.front[1])*pony.scale &
            mousePos.y <  pony.translate[1]+(positions.front[1]+positions.front[3])*pony.scale )
        {
            $("#ctx").addClass("ctxSelect");
        }
        else
        {
            $("#ctx").removeClass("ctxSelect");
        }  
    },false);
    
    function myMove(e){
     if (canmove){
         var mousePos = getMousePos(canvas, e);
         pony.translate[0] = mousePos.x - canvas.offsetLeft - (positions.front[0])*pony.scale; 
         pony.translate[1] = mousePos.y - canvas.offsetTop -  (positions.front[1])*pony.scale;
         pony.spawnPony();
     }
    }
    
    function myDown(e){
        var mousePos = getMousePos(canvas, e);
       if( mousePos.x >  pony.translate[0]+(positions.front[0])*pony.scale & 
            mousePos.x <  pony.translate[0]+(positions.front[0]+positions.front[2])*pony.scale &
            mousePos.y >  pony.translate[1]+(positions.front[1])*pony.scale &
            mousePos.y <  pony.translate[1]+(positions.front[1]+positions.front[3])*pony.scale )
        {
          canmove = true;
          canvas.onmousemove = myMove;
       }
    }
    
    function myUp(e){
     canmove = false;
     var mousePos = getMousePos(canvas, e);

     canvas.onmousemove = null;
    }
    
    canvas.onmousedown = myDown;
    canvas.onmouseup = myUp;
    
});