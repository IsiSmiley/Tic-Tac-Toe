//Spieler
var player = 1;
//Felder
var fields = ['','','','','','','','',''];

//Füge EventListener an die Felder 1 bis 9 beim Seitenstart (mit Array und ohne Objektorientierung)
function addEventListeners() {
	document.getElementById('0').addEventListener('click', function () { chooseField(0) });
	document.getElementById('1').addEventListener('click', function () { chooseField(1) });
	document.getElementById('2').addEventListener('click', function () { chooseField(2) });
	document.getElementById('3').addEventListener('click', function () { chooseField(3) });
	document.getElementById('4').addEventListener('click', function () { chooseField(4) });
	document.getElementById('5').addEventListener('click', function () { chooseField(5) });
	document.getElementById('6').addEventListener('click', function () { chooseField(6) });
	document.getElementById('7').addEventListener('click', function () { chooseField(7) });
	document.getElementById('8').addEventListener('click', function () { chooseField(8) });
	/* ... hier kommt dein Code ... */
}

//Die Funktion 'chooseField' prüft, ob das Feld bereits besetzt ist. Falls nicht, wird (abhängig vom Spieler) das entsprechende Zeichen gesetzt.
function chooseField(thisField) {
	if(fields[thisField]==''){
		if (player == 1){
			document.getElementById(thisField).innerHTML = 'X';
			document.getElementById('player').innerHTML = 'Player 2';
			fields[thisField]='X';
			checkWinner();
			/* ... document.getElementById(field[thisField]==''){} */
			player = 2;
		} else { document.getElementById(thisField).innerHTML = 'O';
			document.getElementById('player').innerHTML = 'Player 1';
			fields[thisField]='O';
			checkWinner();
			player = 1;
}	
	}
}
		//* ... document.getElementById(thisField).innerHTML = 'X' ... */
//Die Funktion 'checkWinner' überprüft nach jedem Spielzug, ob es einen Sieger gibt
function checkWinner(){
	if(
		(fields[0]!='' && fields[0]==fields[1] && fields[1]==fields[2]) ||
		 fields[3]!='' && fields[3]==fields[4] && fields[4]==fields[5]  ||
		 fields[6]!='' && fields[6]==fields[7] && fields[7]==fields[8]  ||
		 fields[0]!='' && fields[0]==fields[3] && fields[3]==fields[6]  ||
		 fields[1]!='' && fields[1]==fields[4] && fields[4]==fields[7]  ||
		 fields[2]!='' && fields[2]==fields[5] && fields[5]==fields[8]  ||
		 fields[0]!='' && fields[0]==fields[4] && fields[4]==fields[8]  ||
	 	 fields[2]!='' && fields[2]==fields[4] && fields[4]==fields[6])
	{  document.getElementById('winner').setAttribute('style', 'display: block;');
	document.getElementById('winnertext').innerHTML = 'Spieler ' +player+' hat gewonnen!';
	}
	
		/* ... hier kommt dein Code ... */
}