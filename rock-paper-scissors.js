var userWins = 0;
var computerWins = 0;
var choices = ['rock', 'paper', 'scissors']

while ( userWins < 3 && computerWins < 3 ) {
	var userChoice = prompt('rock, paper, scissors, shoot!');
	var computerChoice = choices[parseInt(Math.random()*10)%3];

	if ( userChoice == computerChoice ) {

		console.log("It's a tie! You both chose " + userChoice + ".")

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'rock' && computerChoice == 'paper') {

		console.log("Paper beats rock. Computer wins!");
		computerWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'rock' && computerChoice == 'scissors') {

		console.log("Rock beats scissors. You win!");
		userWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'paper' && computerChoice == 'rock') {

		console.log("Paper beats rock. You win!");
		userWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'paper' && computerChoice == 'scissors') {

		console.log("Scissors beats paper. Computer wins!");
		computerWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);
	
	} else if (userChoice == 'scissors' && computerChoice == 'rock') {

		console.log("Rock beats scissors. Computer wins!");
		computerWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'scissors' && computerChoice == 'paper') {

		console.log("Scissors beats paper. You win!");
		userWins++;

		console.log("Your wins: " + userWins);
		console.log("Computer wins: " + computerWins);

	} else if (userChoice == 'quit') {
		break;
	} 
	else {
		console.log('Please choose rock, paper, or scissors');
	}
}

if (userWins == 3) {
	console.log("You are the winner!");
	console.log("Final score:");
	console.log("User: " + userWins);
	console.log("Computer: " + computerWins);
} else if (computerWins == 3) {
	console.log("Sorry, you lost.")
	console.log("Final score:");
	console.log("User: " + userWins);
	console.log("Computer: " + computerWins);
}