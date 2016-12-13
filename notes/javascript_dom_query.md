## Javascript - DOM Query Selectors

#### Getting only ONE result

Use one of these ways, and you will end up with the first matching element:

    document.body.children.form.login_form.children.username
    document.getElementById("username")
    document.querySelector("[name=username]")

You will then be able to use it directly, like this:  

    document.getElementById("username").value = "my_so_clever";

----
    
#### Getting multiple elements

Use one of these techniques to select a list of elements - you will get ALL matching elements, as an Array:

    document.querySelectorAll("input")
    document.getElementsByTagName("button")
    document.getElementsByClassName(".selected")

---

#### We will soon learn about jQuery

It does more than just "queries". With querySelector, you can very easily select things using CSS queries, and you should use that if possible. But, jQuery will not only give you the element, but will inject many useful functions and variables into it, for your convenience.

This is how you would select something using jQuery:

    $(".selected")
    $("div.about_me > .selected")
    $("[name=username]")






