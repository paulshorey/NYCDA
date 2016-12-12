var converter = new showdown.Converter();

/* 
	loop through notes 
*/
var notes = {"git":"git", "js vars":"javascript_vars", "js dom":"javascript_dom", "js query":"javascript_dom_query", "js links":"javascript_links", "terminal":"terminal", "vim":"terminal_vim"};
for (var key in notes) {
	var value = notes[key];

	// 1. add placeholders
	$( "#notes_keys" ).append( "<li note=\""+value+"\">"+key+"</li>" );
	$( "#notes_values" ).append( "<div id=\""+value+"\">" );

	// 2. add content into each placeholder
	$.get( ""+value+".md", function( text ) {
		$( "#notes_values > #"+this ).html( converter.makeHtml(text) );
	}.bind(value));

}

/*
	animate the tabs
*/
$("#notes_keys > * ").click(function(event) {
	var tab = $(this).attr("note");

	$(this).addClass("current");
	$(this).siblings().removeClass("current");

	$("#notes_values > * ").not(tab).removeClass("current");
	$("#notes_values > #"+tab).addClass("current");

});