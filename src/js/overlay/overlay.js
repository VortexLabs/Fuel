
function v_overlay(){
	var overlays = document.getElementsByClassName('v-overlay');
	for(var i = 0; i < overlays.length; i++)
	{
		overlays[i].style.display = 'none';
	}

	var clickable = document.getElementsByClassName('v-overlay-show');
	for(var i = 0; i < clickable.length; i++)
	{
		clickable[i].onclick = function(e){
			var classes = this.className.split(" ");
			for(var ii = 0; ii < classes.length; ii++)
			{
				if(classes[ii].contains("v-overlay-show-"))
				{
					var number = classes[ii].slice(-1);

					if(!isNaN(number))
						v_show_overlay(number);
				}
			}
		};
	}

}

function v_show_overlay(index){

	var overlay = document.getElementsByClassName("v-overlay-" + index);
	var overlayBG = document.getElementsByClassName('v-overlay-dark');
	var thing;
	var bg;
	for(var i = 0; i < overlay.length; i++)
	{
		thing = overlay[i];
		thing.style.display = "block";
		thing.style.position = "fixed";
		thing.style.top = "50%";
		thing.style.left = "50%";
		thing.style.transform = "translate(-50%, -50%)";

		if(overlayBG.length != 0)
		{
			bg = overlayBG[i];
			bg.style.display = 'inline-block';
			bg.style.position = 'absolute';
		}


	}

	var close = document.getElementsByClassName('v-overlay-hide-' + index);
	for(var i = 0; i < close.length; i++)
	{
		close[i].onclick = function(){
			thing.style.display = "none";
		};
	}
}
