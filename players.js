
	


			// * * THE PLAYERS * *


						var playerList = [


						{
							name:'John',
							//function to generate hand
							getHand: function(hands){
								hand =genericGetHand(hands);
								
								return hand;
							}
						},
						{
							name:'Bob',
							//function to generate hand
							getHand: function(hands){
								hand =genericGetHand(hands);
								
								return hand;
							}
						},
						]


						//testing out players, and game status
						//console.log((players[0].getHand(hands)) +' '+  players[0].name);
						//console.log((players[1].getHand(hands)) +' '+  players[1].name);
						//checking if hands change from round to round
						//console.log((players[0].getHand(hands)) +' '+  players[0].name);
						//console.log((players[1].getHand(hands)) +' '+  players[1].name);
