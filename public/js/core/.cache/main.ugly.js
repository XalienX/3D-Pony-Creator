document.getElementById("loadInput").addEventListener("change",load.loadFile,!1);var opts={lines:15,length:3,width:2,radius:9,corners:0,rotate:0,color:"#C763C7",speed:1.7,trail:60,shadow:!0,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"};$(function(){function t(){$("#menu").css({width:window.innerWidth-40+"px"}),window.innerWidth>1275?(canvasWidth=window.innerWidth-297,$("#ctx").attr({width:canvasWidth+"px",height:window.innerHeight})):window.innerWidth<1275&canvasWidth>986&&(canvasWidth=986,$("#ctx").attr({width:canvasWidth+"px",height:window.innerHeight})),typeof pony=="object"&&pony.spawnPony()}t();var e=0;window.setInterval(function(){e<3?(e+=1,$(".wait").append(".")):(e=0,$(".wait").html(""))},2e3),window.onresize=t}),$("#debugbtn").click(function(){$("#debug").slideToggle("2000","easeOutQuint"),$(this).css("bottom")=="196px"?$(this).animate({bottom:"0px"},"2000","easeOutQuint"):$(this).animate({bottom:"196px"},"2000","easeOutQuint")}),$("#opacity").click(function(){$("#opacity").fadeOut("200"),$("#infobox").hide(),$("div.box").hide()}),$(document).keyup(function(e){console.log("Clicked: "+e.keyCode),e.keyCode==37?$("#positionBtns button#posleft").click():e.keyCode==39?$("#positionBtns button#posright").click():e.keyCode==96?$("#positionBtns button#poscenter").click():e.keyCode==44&&(e.preventDefault(),$(".exportPNG").click())})