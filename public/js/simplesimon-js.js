"use strict";
(function(){

$(document).ready(function() {

	var div = ["pink","green","orange","blue"];
	var lights = [];
	var	random;
	var position = 0;
	var delay = 2000;

	$('#go').click(function (){
		simonMove();
		buttonFlasher();
	});

	//Simon's turn in the game.
	function simonMove(){
		randomize();
		lights.push(random);
		console.log(lights);
	}

	//Flashes buttons in the array.
	function buttonFlasher (){
		lights.forEach(function(element,index){
			var delay = 1000;
			var flash = setTimeout(function(){	
				$("#" + lights[index]).animate({
					opacity: .25
				},500).animate({
					opacity: 1
				},500);
			},delay*index);	
		})

	}

	//Generates random number and chooses div.
	function randomize(){
		random = div[Math.floor(Math.random()* 4)];
		console.log(random);
	}

	

	//Stops the game
	$('#stop').click(function (){
		position = 0;
	});


		// var pink = $("#pink");
		// var green = $("#green");
		// var orange = $("#orange");
		// var blue = $("#blue");

	$('#area').click(function(event){
		var target = $(event.target).attr('id');
		if (target == lights[position]) {
			console.log(lights);
			position++;             
		}   else {
			alert("wrong");
			position = 0;
		}
		if (position == lights.length) { 
			simonMove();
			buttonFlasher();
		}
	});


});
})();

	// var timeoutId = setTimeout(function () {
	//     clearInterval(timer);
	//     alert('You lose!');
	// }, 10000);