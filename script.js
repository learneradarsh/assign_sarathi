setInterval(function(){
		cnt=$(".blink").children().length;
		randomNumber = randomNumberFromRange(0, cnt-1);
		p=$(".blink").children().eq(randomNumber);
		setTimeout(toggle(p),800);
		p.show();
	},800);
	function toggle(p) {
		setTimeout(function(){
			p.hide();
		}, 400);
		setTimeout(function(){
			//p.show();
		}, 400);
		//p.show();
		
	}
	function randomNumberFromRange(min,max){
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
