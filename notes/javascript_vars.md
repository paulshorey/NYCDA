## Javascript - VARIABLES

#### Everything is a variable.  

Some are pre-defined, pre-existing, you can just use them:

    screen.width					// your opened window width, in pixels
    location.href					// your current web address
    document.getElementById();  	// a function, to help you find elements
    parseFloat()					// a function, to convert text to numbers

Some are new, you have to make them yourself:

    var someName = "Some Text";  
    var someNumber = 45;  
    var reallyTrully = false;

----
    
#### Those were simple variables. We can also make more complex variables:

This is an array (a list of values):

	var myArray = [ "one", "two", "three", "four", "five" ];
   
Get one value from the array like this:

	myArray[1]; // this is actually the second thing in the array
    
This is an object (a list key/value pairs):

	var myObj = { "first":"Thing", "another":"Twins", "whatev":"Triplets" }
    
Get one value from the object like this:
	
	myObj["first"]; // the value that corresponds to this key above
	myObj.first; 	// this is sometimes better syntax, your preference
    
---

#### Functions are also variables:

This is just a "shortcut" way to make a function:

	function myFunc(){
		alert("something");
    }

It really means this:

	var myFunc(){
    	alert("something");
    }

