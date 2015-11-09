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
	var shuffle;
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
	
	for ( i in pieces){//gets pieces to move
	  pieces[i].onclick=function movepiece(){
	    topX = parseInt(this.style.top);
	    leftY = parseInt(this.style.left);
		if (topX == topEmptyspace && leftY == (leftEmptyspace-100) || topX == topEmptyspace && leftY == (leftEmptyspace+100) || topX == (topEmptyspace-100) && leftY == leftEmptyspace || topX == (topEmptyspace+100) && leftY == leftEmptyspace){
		this.style.top = topEmptyspace + "px";
		this.style.left = leftEmptyspace + "px";
		topEmptyspace = topX;
		leftEmptyspace = leftY;
		this.className("movablepiece");
		}
	  }
	}
	//necessary for shuffle function of puzzle
	//var shuffling = Math.floor (Math.random () * 4);
	
	//attempt at creating selection box. not complete
	/*var userChoice = prompt("please choose your puzzle image. Option1, option2, option3,option4");
switch (userChoice) {
    case 'option1':
    pieces[i].style.backgroundImage="url('http://b4.pinger.pl/5647fd9826e94582f73f9def5104c2bf/zdjecie_wykonawcypora_na_przygode.jpg')";
        break;
    case 'option2':
    pieces[i].style.backgroundImage="url('http://e27caaa35df580732627-5fa18836a2ae6b5e7c49abcc89b20237.r67.cf1.rackcdn.com/2519411_888a1420_m.jpeg')";
        break;
    case 'option3':
    pieces[i].style.backgroundImage="url('http://www.24horas.cl/incoming/oye-arnoldjpg-1692191/ALTERNATES/w460h260/Oye-Arnold.jpg')";
        break;
    case 'option4':
    pieces[i].style.backgroundImage="url('http://4.bp.blogspot.com/-UlCFf9Zt6ug/T0L4KjcxaGI/AAAAAAAAA5A/gIRm127NaAg/s400/gatos_famosos_20.jpg')";
        break;
    default:
    pieces[i].style.backgroundImage="url('background.jpg')";*/
};