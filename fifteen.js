window.onload = function(){
	var puzzle = document.getElementById("puzzlearea");
	var pieces = puzzle.children;
	var positionTop = 0;
	var positionLeft = 0;
	var topEmptyspace = 300;
	var leftEmptyspace = 300;
	var backgroundLeft = 0;
	var backgroundTop = 0;
	var topX;
	var leftY;
	for(var i =0; i < pieces.length; i++){
		pieces[i].className = "puzzlepiece";
		pieces[i].style.top =  positionTop + "px";
		pieces[i].style.left = positionLeft + "px";
		pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px";
		//sets pieces in the correct positions .
		if(positionLeft < 300){
			positionLeft = positionLeft + 100;
			backgroundLeft = backgroundLeft -100; //Make the correct parts of the background show through behind each tile.
		}
		else{
			positionLeft = 0;
			backgroundLeft = 0;
			positionTop = positionTop + 100;
			backgroundTop = backgroundTop - 100;
		}
	}
	
};