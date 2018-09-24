let slider = document.getElementById("speed");
let vid = document.getElementById("vid");
let currentSpeed=0;
let currentFILE=0;
let currentPATH="LN0/";
let newSpeed=0;
vid.playbackRate = 0;
	vid.addEventListener('ended',function(){
		currentFILE++;
		vid.src = currentPATH+currentFILE+".webm";;
		vid.play();
	},false);

	setInterval(function(){

		if(currentSpeed>=0){
			if(currentSpeed<=newSpeed){
				currentSpeed=currentSpeed+0.0009;
			}else{
				currentSpeed=currentSpeed-0.007;
			}
		}else{
			currentSpeed=0;
		}
		try{
			if(currentSpeed>=0)
				vid.playbackRate = currentSpeed;
		}catch(e){}
	},100);
		

slider.oninput = function() {
		newSpeed = this.value;
		vid.play();
}
