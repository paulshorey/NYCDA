JAVASCRIPT LINKS:
---

regular link:				

    <a href=“http://google.com”> click me </a>

not-working link:			

    <a> click me, or don’t, i don’t care </a>

scroll-to-something link:		

    <a href=“#some_section”> click me to scroll down </a>

what will that scroll to?:		

    <a name=“some_section”></a>

do something with javascript:	

    <a href=“#scroll_somewhere” onClick=“do.something”> do something </a>
  
  
---  
  
  
ADD A CLASS TO SOMETHING WHEN YOU CLICK IT:

    <div onClick=“this.classList.add(‘i_am_selected’);”> add a class to this div </div>
    <div onClick=“this.classList.remove(‘i_am_selected’);”> remove a class from this div </div>
    <div onClick=“this.classList.toggle(‘i_am_selected’);”> add / remove a class from this div </div>

^
—— “this” refers to the element that you’re in, so in this case, the div


