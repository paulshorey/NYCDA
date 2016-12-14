var students = ['jonathan', 'james', 'brennan', 'alissa', 'kacey', 'steven'];

for (var i = 0; i < students.length; i++) {
	document.getElementById('for_loop').innerHTML += '<li>' + students[i]+ '</li>';
//	document.getElementById('for_loop').children.style.display = 'list-item';
}

var x = 99;
while(x>0){
	document.getElementById('while_loop').innerHTML += x + " bottles of beer on the wall," + x + " bottles of beer! Take one down, pass it around," + (x-1) + " bottles of beer on the wall!" + '</br>';
	x= x-1;
}