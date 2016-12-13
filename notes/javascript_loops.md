## Javascript Loops


#### first of all...

A loop is much like a function. It is a block of code that does something, and can be re-used. One main difference is - loops contain a variable which increases every time you use the block of code.


#### for() {}

To use a "for" loop, you must start with a list

	var foods = { "fruit":"apple", "vegetable":"carrot", "grain":"rice" }
    
Then, you read over each list "item", one at a time like this:

	for (var key in foods) {
    	console.log( foods[key] + " is a " + key );
    }
    
Remember, the "key" variable above can be named anything you want to call it. But, it always represents the identifier of each "key:value" pair, or more simply, the "list item". If "apple" is the value, then "fruit" is the key. So, the very first time the loop is run, the "key" value will be "fruit".


#### while() {}

This is a loop to iterate over a set of numbers. It does not read over an existing list. It simply counts through a bunch of numbers.

	var x = 1;
    
    while (x <= 100) {
    	
        if (x==1) {
        	console.log( "I am on the 1st loop" );
        } elseif (x==2) {
        	console.log( "I am on the 2nd loop" );
        } elseif (x==3) {
        	console.log( "I am on the 3rd loop" );
        } else {
        	console.log( "I am on the " + x + "th loop" );
        }
        
        x = x + 1;
        
    }
    
