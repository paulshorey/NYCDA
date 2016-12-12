## Javascript - DOM Query Selectors

#### HTML4: getElementByID()  

Before HTML5 and jQuery, it was very hard to select things with Javascript. Your options were to scale the hierarchy manually, or get it by ID:

    document.body.children.form.login_form.children.username
    document.getElementById("username")


----
    
#### HTML5: much easier!

Now there are many ways to select an element in the browser:

	document.getElementsByTagName()
	document.getElementsByClassName()
   
But most importantly, you can now select stuff in Javascript using CSS Selectors:

	document.querySelectorAll(".selected")
    document.querySelector("div.about_me > div.selected")
    document.querySelector("[name=username]")
    
---

#### jQuery makes things even easier

But its more than just "queries", because with HTML5 querySelector, you can very easily select things using CSS queries. JQuery opens up a whole world of useful functions, loops, and animations.

But first, this is how you would select something using jQuery:

	$(".selected")
    $("div.about_me > .selected")
    $("[name=username]")
    
As you can see, there is no advantage to jQuery if all you need to do is access the DOM easily. You can already do that with HTML5



