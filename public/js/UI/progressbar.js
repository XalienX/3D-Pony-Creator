progressbar = (function(){

	function setProgress(current, numTasks)
	{
		if(current == numTasks)
		{
            clearInterval(dots);
			$('#loader').remove();	
		}

	}

	return {
		setProgress : setProgress
	}
})();




