var temperature = 90;
var precipitation = false;
var indoors = false;

console.log('The temperature is ' + temperature + ' degrees');

if (indoors || (temperature > 80 && !precipitation)) {
	console.log('Time to swim!');
} else {
	console.log("Let's not swim right now.");
}