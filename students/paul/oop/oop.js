/*
	Create a prototypical Person object. 
	From this object, extend a Teacher object and a Student object. 
	Each of these objects should have attributes and methods pertinent to what they describe. 
	Also create a School object that should be able to store instances of students and teachers. 
	Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
*/
// var Person = function(role){

// 	var action = "study";
// 	if (role=="teacher") {
// 		action = "teach";
// 	}

// 	return {
// 		action: action,
// 		haircolor: "brown",
// 		height: "6ft"
// 	}

// }
// var person = new Person();


var Person = function(role) {
	this.species = "human";
	this.number_of_eyes = 2;
	this.action = "sit around and do nothing";
}


var Teacher = function(){
	// inherit defaults
	var person = new Person('teacher');

	// make changes
	person.action = "teach";

	// output final result
	return person;
}
console.log(new Teacher());



var Student = function(){
	// inherit defaults
	var person = new Person('student');

	// make changes
	person.action = "study";

	// output final result
	return person;
}
console.log(new Student());



var School = function(){
	this.students = [];
	this.teachers = [];
	this.enrollStudent = function() {
		this.students.push( new Student() );
	}
	this.hireTeacher = function() {
		this.teachers.push( new Teacher() );
	}
}
var mySchool = new School();
mySchool.hireTeacher();
mySchool.enrollStudent();
mySchool.enrollStudent();
mySchool.enrollStudent();
mySchool.enrollStudent();
console.log(mySchool);


