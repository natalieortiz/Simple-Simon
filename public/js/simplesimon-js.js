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

	//Compares user clicks with lights array.
	$('#area').click(function(event){
		var target = $(event.target).attr('id');
		if (target == lights[position]) {
			console.log(lights);
			console.log(position);
			position++;             
		}   else {
			alert("wrong");
			position = 0;
			console.log(position);
		}
		if (position == lights.length) { 
			position = 0;
			simonMove();
			buttonFlasher();
		}
	});


});
})();
