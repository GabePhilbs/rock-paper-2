



	*	*	*	Observations about this program:	*	*	*

#This will work with any number of players without any additional changes in the code. 
 	- Just insert more layers in the playersList
 	-the game will include them all in the tournament

 	


# because of the NATURE of the TOURNAMENT -- one of every two players is eliminated, and the remaining number must still be even
  until only one is left -- the number of players must be a POWER of 2

# the program works in layers 
  	- round
  	- game - as many rounds as it take for one player to achieve the minimum victories
  	- matchmaking  - makes every player get in a game
  	- tournament - makes as many matches as needed in orther to eliminate all but one player



# I have separated the players from the code, 
	- Data can be inserted in the list, without exposing the actual code to mistakes

#Separated javascript from Html

# The game calls the hand choice from each player's object
	- there is a generic hand choice function, which is referred by the objects
	- but this allows customization of player strategies
	-Also, should the choices become user inputs in the future, only the player list has to be altered, not the game's functions


# I have created tests along the code. 
	-they are comented out but can be easily activated
	-if something breaks the code, executing the tests in order will help locate the issue


# all players included are either a former James Bond, or an actor from the movie 12 angry men
	-I needed names, so I inserted Bonds
	-Then i needed 12 more so...











