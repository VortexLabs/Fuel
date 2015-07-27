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

	document.getElementById("b1").onclick = function(){
		document.getElementById('p1').style.opacity = 1;
		FadeOutCubes("#p1");
	};

	document.getElementById("b2").onclick = function(){
		document.getElementById('p2').style.opacity = 1;
		FadeOutCubes("#p2");
	};

	document.getElementById("b3").onclick = function(){
		document.getElementById('p3').style.opacity = 1;
		FadeOutCubes("#p3");
	};

	document.getElementById("b4").onclick = function(){
		document.getElementById('p4').style.opacity = 1;
		FadeOutCubes("#p4");
	};

	document.getElementById("b5").onclick = function(){
		document.getElementById('p5').style.opacity = 1;
		FadeOutCubes("#p5");
	};

	document.getElementById("b6").onclick = function(){
		document.getElementById('p6').style.opacity = 1;
		FadeOutCubes("#p6");
	};

	document.getElementById("b7").onclick = function(){
		document.getElementById('p7').style.opacity = 1;
		FadeOutCubes("#p7");
	};

	document.getElementById("b8").onclick = function(){
		document.getElementById('p8').style.opacity = 1;
		FadeOutCubes("#p8");
	};

	document.getElementById("cancel").onclick = function(){
		StartAnimation();
		document.getElementById("cancel").style.opacity = 0;

		var index = 1;
		for(var i = 1; i <= 8; i++){
			
			console.log('p' + index);
			
			setTimeout(function(){
				document.getElementById('p' + index).style.opacity = 0;
				index++;
			}, 3000)
		}
	};

};

function FadeOutCubes(sec)
{
	var r = document.getElementsByClassName('cube');
		var x = [0,5,7,1,2,4,3,6];
		var index = 0;
		for(var i = 0; i < r.length; i++){
			setTimeout(function(){
				var num = x[index];
				index++;
				r[num].style.opacity = 0;
			}, i * 150);
			
		}

	
	setTimeout(function(){
		document.querySelector(sec + " .text-area").style.transform = "translateX(0)";
		document.getElementById("cancel").style.opacity = 1;
	}, 1400)
}

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
			r[num].style.pointerEvents = "all";
		}, i * 300);
		
	}

	document.getElementById("grid").style.pointerEvents = "all";
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
