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
		lights.push(random)
		console.log(lights);
		buttonFlasher();
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

	var pink = $("#pink");
	var green = $("#green");
	var orange = $("#orange");
	var blue = $("#blue");
	

	//Stops the game
	$('#stop').click(function (){
		clearInterval(timer);
		position = 0;
	});

	//$(document).keyup(function(event){
	// 	if (event.keyCode == konami[position]) {
	// 		position++;              
	// 	}   else {
	// 		console.log("incorrect");
	// 		position = 0;
	// 	}

	// 	if (position == konami.length) { 
		// alert("you win");
	// 	}

	// });

	// var timeoutId = setTimeout(function () {
	//     clearInterval(timer);
	//     alert('You lose!');
	// }, 10000);

});
})();