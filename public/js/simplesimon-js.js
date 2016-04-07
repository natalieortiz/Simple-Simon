"use strict";
(function(){

$(document).ready(function() {

	var div = ["pink","green","orange","blue"];
	console.log(div);

	$('#go').click(function (){
		lightUp();
	});


	function lightUp(){

		var random = div[Math.floor(Math.random()* 4)];
		var play = [];
		var user = 0;

		$("#" + random).animate({
			opacity: .25
		},1000).animate({
			opacity: 1
		},1000);

		$("#" + random).click(function(){
			alert("you clicked the button");
		});

	}

	//Konami exercise:
	
		// var konami = [38,38,40,40,37,39,37,39,66,65,13];
		// var position = 0;
		// console.log(konami.length);

		// $(document).keyup(function(event){
		// 	if (event.keyCode == konami[position]) {
		// 		console.log("correct");
		// 		console.log(event.keyCode);
		// 		console.log(position);
		// 		position++;              
		// 	}   else {
		// 		console.log("incorrect");
		// 		position = 0;
		// 	}

		// 	if (position == konami.length) { 
		// 		alert("you win");
		// 	}

		// });


});
})();