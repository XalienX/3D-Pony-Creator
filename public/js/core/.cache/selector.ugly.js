function getMousePos(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}var positions={front:[268,163,255,561]},canmove=0;$(function(){function e(e){if(canmove){var t=getMousePos(canvas,e);pony.translate[0]=t.x-canvas.offsetLeft-positions.front[0]*pony.scale,pony.translate[1]=t.y-canvas.offsetTop-positions.front[1]*pony.scale,pony.spawnPony()}}function t(t){var n=getMousePos(canvas,t);n.x>pony.translate[0]+positions.front[0]*pony.scale&n.x<pony.translate[0]+(positions.front[0]+positions.front[2])*pony.scale&n.y>pony.translate[1]+positions.front[1]*pony.scale&n.y<pony.translate[1]+(positions.front[1]+positions.front[3])*pony.scale&&(canmove=!0,canvas.onmousemove=e)}function n(e){canmove=!1;var t=getMousePos(canvas,e);canvas.onmousemove=null}canvas.addEventListener("mousemove",function(e){var t=getMousePos(canvas,e);t.x>pony.translate[0]+positions.front[0]*pony.scale&t.x<pony.translate[0]+(positions.front[0]+positions.front[2])*pony.scale&t.y>pony.translate[1]+positions.front[1]*pony.scale&t.y<pony.translate[1]+(positions.front[1]+positions.front[3])*pony.scale?$("#ctx").addClass("ctxSelect"):$("#ctx").removeClass("ctxSelect")},!1),canvas.onmousedown=t,canvas.onmouseup=n})