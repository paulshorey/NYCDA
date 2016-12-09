var converter = new showdown.Converter();

/* 
	loop through notes 
*/
var notes = ["git", "javascript_links", "terminal", "terminal_vim"];
for (var n in notes) {
	var name = notes[n];

	// 1. add placeholders
	$( "#notes_keys" ).append( "<li note=\"#"+name+"\">Tab 1</li>" );
	$( "#notes_values" ).append( "<div id=\""+name+"\">" );

	// 2. add content into each placeholder
	$.get( ""+name+".md", function( text ) {
		console.log('text',text);
		console.log('converter.makeHtml(text)',converter.makeHtml(text));
		$( "#notes_value_"+name ).html( "<p>"+text+"</p>" );
	});

}

/*
	animate the tabs
*/
$("#notes_keys > * ").click(function(event) {
	var tab = $(this).attr("note");

	$(this).addClass("current");
	$(this).siblings().removeClass("current");

	$("#notes_values > * ").not(tab).css("display", "none");
	$("#notes_values > "+tab).fadeIn();

});