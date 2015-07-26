require('./sticky-footer/sticky-footer.js');
require('./overlay/overlay.js');


window.onload = function(){
	if(document.getElementsByClassName('v-adjust-height').length > 0)
	{
		v_adjust_height();
	}

	if(document.getElementsByClassName('v-sticky-footer').length > 0)
	{
		v_sticky_footer();
	}

	if(document.getElementsByClassName('v-overlay').length > 0)
	{
		v_overlay();
	}
	Rescale();
	CheckScale();
	window.onresize = CheckScale;

	var waypoint = new Waypoint({
	  element: document.getElementById('port'),
	  handler: StartAnimation
	})

	window.onscroll = function(){
		var windowHeight = window.pageYOffset;

		document.getElementById('banner-info').style.opacity = 1 - windowHeight / 200 ;
	};

};

function StartAnimation()
{
	var r = document.getElementsByClassName('cube');
	var x = [0,5,7,1,2,4,3,6];
	var index = 0;
	for(var i = 0; i < r.length; i++){
		setTimeout(function(){
			
			var num = x[index];
			index++;
			r[num].style.opacity = 1;
		}, i * 300);
		
	}
}

function Rescale()
{
	var body = document.body,
    		html = document.documentElement;

	var windowHeight = window.innerHeight;

	var imageHeight = windowHeight - 80;

	document.getElementById('banner').style.height = imageHeight + "px";
	document.getElementById('nav').style.marginTop = imageHeight + "px";
}

function CheckScale()
{

	var body = document.body,
    		html = document.documentElement;
	var pageWidth = Math.max( body.offsetWidth, 
                       				html.clientWidth,  html.offsetWidth);

	if(pageWidth < 800)
	{
		document.getElementById('nav-list').style.display = "none";
		//document.getElementById('nav-mobile').style.display = "block";
	}
	else
	{
		document.getElementById('nav-list').style.display = "block";
		//document.getElementById('nav-mobile').style.display = "none";
	}
}
