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
						gameStatus =playRound(gameStatus,players,hands);
						console.log(gameStatus);


			// * * A GAME  * *





