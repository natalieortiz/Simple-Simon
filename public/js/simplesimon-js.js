"use strict";
(function(){

$(document).ready(function() {

	var div = ["pink","green","orange","blue"];
	var lights = [];
	var	random;
	var position = 0;
	var counter = 0;
	var delay = 2000;
	var beep = new Audio('/audio/beep-02.mp3');
	var wrongBeep = new Audio('/audio/Price-is-right-losing-horn.mp3');
	var userBeep = new Audio('/audio/short_beep.mp3');

	$('#go').click(function (){
		lights = [];
		simonMove();
		buttonFlasher();
	});

	//Simon's turn in the game.
	function simonMove(){
		randomize();
		lights.push(random);
		console.log(lights);
	}

	function tallyScore(){
		$('#scoreKeeper').html(counter);
	}

	function buttonFlasher (){
		$('#area').addClass("deactivate");
		lights.forEach(function(element,index){
			var delay = 1000;
			var flash = setTimeout(function(){	
				beep.play();
				$("#" + lights[index]).animate({
					opacity: .25
				},500).animate({
					opacity: 1
				},500);
			},delay*index);
		})x
	}

	//Generates random number and chooses div.
	function randomize(){
		random = div[Math.floor(Math.random()* 4)];
		console.log(random);
	}

	function reset(){
		position = 0;
		counter = 0;
		tallyScore(counter);
	}


	//Compares user clicks with lights array.
	$('#area').click(function(event){         
		var target = $(event.target).attr('id');
		if (target == lights[position]) {
			console.log(position);
			beep.play();
			position++;  
		}   else {
			wrongBeep.play();
			alert("Game Over!");
			reset(); 
			console.log(position);
		}
		if (position == lights.length) { 
			position = 0;
			var play = setTimeout(function(){
				simonMove();
				buttonFlasher();
				counter++;
				tallyScore(counter);
			},1500);
		}
	});

});
})();
