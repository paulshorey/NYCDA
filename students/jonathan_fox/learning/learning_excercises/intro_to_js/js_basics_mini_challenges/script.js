
//1. 1) Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var x = 10;
var y = 5;
var z = 'jonathan';
var a = 'is cool';

console.log(x + y);
console.log(z + a);

//2) Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var things_I_like = [food, 'snowboarding', 'movies', 'sports'];
var food = ['pizza', 'pasta', 'sandwiches'];
var movies = ['matrix', 'anchorman', 'the other guys', 'yesman'];

console.log(things_I_like[0,1]);

//3) Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
var number_from_prompt = prompt('Please enter a number', 0);

if (number_from_prompt<100) {
	alert('Your variable is less than 100!');
} else {
	alert("Your variable was " + number_from_prompt + ", which is more than 100!");
}

//6) Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
$('#submit').on('click', function(){
	var name = $('#name').val();
	alert("You have chosen " + name + " as your name.");
})

//7) Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
var years_old = 25;
function a_function() {
	console.log("I am " + years_old + ".");
}

//8) Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
var behind_door = ['A goat', 'A goat', 'A brand new car!'];
$('.door').on('click', function(){
	var i = Math.floor(Math.random()*3);
	$(this).text("Congratulations! You won " + behind_door[i] + "!");	
})

