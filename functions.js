
// * * BASIC VARIABLES * * 


			//strings associated with each hand index
			var hands = ['rock', 'paper', 'scissors'];
			//controlls the game. parameters are[player 1 wins, players2 wins, rounds played, max wins in a game]
			var gameStatus =[0,0,0,0];

			//testitng the random funticon
			//console.log(parseInt(Math.random()*10)%3);

			//function to generate hand
			//function getHand(hands){

				//gets number, used for defining string and for calculating winner
				//var randomNumber = parseInt(Math.random()*10)%3;
				//gets the string of the weapon
				//var hand = [randomNumber,hands[randomNumber]];

				//return hand;


				//}
				//testing out getHand()
				//console.log(getHand(hands));



										
				function genericGetHand(hands){
				    //gets number, used for defining string and for calculating winner
					var randomNumber = parseInt(Math.random()*10)%3;
					//gets the string of the weapon
					var hand = [randomNumber,hands[randomNumber]];
					return hand;
				}





	// * * PLAYING ROUNDS * *


				function playRound(gameStatus,players,hands){


					//counts one more round
					gameStatus[2]++;
					//sets players hand for this round
					var roundStatus = [
					players[0].getHand(hands),
					players[1].getHand(hands)
					]

					//set the defaaault winner as 3 so I wont start with any of the players as winners.
					//this might help catch bugs
					var roundWinner =3;						

					//display current round and players hands
					console.log("Round "+ gameStatus[2] +": " +players[0].name + " chose " + roundStatus[0][1] + " and " + players[1].name + " chose " + roundStatus[1][1] );
					

					//in case of draw, a message is displayed and nobody scores
					if (roundStatus[0][0] == roundStatus[1][0]){
						
						console.log("draw");

						//player 1 wins roundStatus[a][1] is the random number associated with each hand string
						//if player has a higher random number he wins, except in the case( P1 has 3(scissors) and P2 has 1(rock) )
						//player 1 also wins if he has rock and player 2 scissors
						} else {  
									

									if (   ((roundStatus[0][0] == 0) &&  (roundStatus[1][0] == 2))   ||  ((roundStatus[0][0] > roundStatus[1][0]) && ( roundStatus[0][0] != 2 ||  roundStatus[1][0] != 0))) {
											//establishes player 1 as winner
											roundWinner = 0;
									

											//player 2 wins
										}else {
											roundWinner = 1;
											
										}

									gameStatus[roundWinner]++;

									console.log( players[roundWinner].name + " won this round.");
						}


					//returns updated gameStatus
					return gameStatus;

				}

				// testing if gamestus is being altered
				//gameStatus =playRound(gameStatus,players,hands);
				//console.log(gameStatus);


	// * * A GAME  * *


	// when initiating a new game, the array hands must be referenced
	// also, two places must be chosen from the playerList e.g. (hands,playerList[0],playerList[1])
	function playGame(hands, player1,player2, playUntil){


		//the 
		var players =[player1, player2];

		// the 4th number of this array is the number of round wins required to win the game
		var gameStatus = [0,0,0,playUntil];


		console.log(" ");
		console.log(" ");
		console.log(" ");
		console.log("		Next match: " + players[0].name + " vs " + players[1].name );
		console.log(" ");
		console.log(" ");


		//loop while neither player enough victories to win the game
		while((gameStatus[0] < gameStatus[3] ) && (gameStatus[1] < gameStatus[3])){

			gameStatus = playRound(gameStatus,players,hands);

		}

		if (gameStatus[0] > gameStatus[1]){
			var gameWinner = players[0];

		} else{
			var gameWinner = players[1];

		}
		

		///   * * * I WANTED TO SORT THE SCORE, BUT I'M DOING SOMETHING WRONG * * * 
		//function sortScore(gameStatus){
		//	var finalScore = [gameStatus[0],gameStatus[1]];
		///	 finalScore = finalScore.sort(finalScore);
		//	 return finalScore;

		//}

		//var finalScore = sortScore(gameStatus);

		//console.log(finalScore);
		console.log('The winner of this game is ' + gameWinner.name);
		console.log('The score was ' + gameStatus[0] + " x " + gameStatus[1]);
		console.log(" ");
		console.log(" ");
		console.log(" ");

		return gameWinner;

	}







		// * * MATCHMAKING  * *


	// a loop that creates games to acomadate the players
	function matchmaking (playerList, playUntil){

			//an array of who won the games
			var winnersOfRound =[];

			//counter for the winners array
			var i = 0;

			

			//testing if everything is ok so far
			//console.log(playerList.length)
			//console.log(playerList.pop());
			//console.log(playerList);

			//every game takes two players, until there is nobody left
		while (playerList.length > 0){
		
			i++;

			

			//take two players from the list for this match
			//start a game, and push the winner to the winnersOfRound array
			winnersOfRound.push( playGame( hands, playerList.pop(), playerList.pop() , playUntil ) );

		}

		return winnersOfRound;
	}







	// * * THE FINAL TOURNAMENT OF DOOM!!!!!!! * *


	//the playTournament function gets the player list and the length chosen for each game
	function playTournament(playerList,playUntil){

		//next, we need to be sure there is an even number of players
		if(playerList.length % 2 != 0){

			//if it is odd, tell player
			console.log("you need an even number of players to have a tournament!");
			//then stop the function
			return;

		}

		//if the number is even, the tournament begins.
		//if we passed the odd/even test, the function continues

		while (playerList.length > 1){
			playerList = matchmaking(playerList, playUntil);
		}
		
		console.log(playerList[0].name + " is the world champion!");
		console.log(" ");
		console.log(" ");
		

		
	}




















