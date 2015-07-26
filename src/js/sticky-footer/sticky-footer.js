function v_sticky_footer(){
	var footer = document.getElementsByClassName('v-sticky-footer');
	for(var i = 0; i < footer.length; i++)
	{
		var body = document.body,
    		html = document.documentElement;

		var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       				html.clientHeight, html.scrollHeight, html.offsetHeight );
		var windowHeight = window.innerHeight;

		console.log(pageHeight);
		console.log(windowHeight);

		if(pageHeight == windowHeight)
		{
			footer[i].style.position = "absolute";
			footer[i].style.bottom = "0";
		}
	}
}

function v_adjust_height(){
	var sections = document.getElementsByClassName('v-adjust-height');
	for(var i = 0; i < sections.length; i++)
	{
		var children = sections[i].childNodes;
		var largestHeight = 0;
		for(var ii = 0; ii < children.length; ii++)
		{
			if(children[ii].offsetHeight > largestHeight)
			{
				largestHeight = children[ii].offsetHeight;
			}
		}

		for(var ii = 0; ii < children.length; ii++)
		{
			if(children[ii].tagName == "DIV")
			{
				children[ii].style.height = largestHeight + "px";
			}
		}
	}
}
