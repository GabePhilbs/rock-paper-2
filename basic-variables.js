
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
