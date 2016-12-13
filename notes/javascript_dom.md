## Javascript - DOM


it means: **DOCUMENT OBJECT MODEL**

**DOCUMENT**:  
the HTML document, like, "**window.document**..." - the document is like a Microsoft Office "document", it is the thing you're looking at, but unlike an office document, HTML is "dynamic", **it can change** and be changed

**OBJECT**:  
var cars = {toyota:"Prius", ford:"Taurus",chevy:"Camaro"}

**MODEL**:  
a set of plans, such as an architectural drawing, an engineering schematic, a "todo list" - something that helps you visualize and plan a thing you're building


This is inside your open window or tab:

    <html>
      <head>
        <title>Login</title>
      </head>
      <body>
        <form name="login_form">
          <input type="text" name="username" />
          <input type="password" name="password" />
        </form>
      </body>
    </html>
    
This is inside your JAVASCRIPT "window" variable:

    // document.body
    // document.body.children.login_form
    // document.body.children.login_form.children.username
