function checkFullscreen()
{
	if (screen.width != window.innerWidth || screen.height != window.innerHeight)
	{
		if($('#xalert').css('display') == 'none')
		{
			$('#xalert span').text('Fullscreen mode is needed.');
			$('#xalert span.desc').text('Just press F11...');
			$('#xalert').fadeIn(100);
		}
	}
	else
	{
		if($('#xalert').css('display') != 'none')
		{
			$('#xalert').fadeOut(100);
		}
	}
}
/*
var docElm = document.getElementsByTagName('html')[0];
if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
}
else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
}
else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
}

setInterval(function(){checkFullscreen(); },30);
*/