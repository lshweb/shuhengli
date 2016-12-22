
$(document).ready(function() {

$( "#wrapper").hide();

$( "#about" ).click( function() {
    window.location = "index.html";
});

$( "#portfolio" ).click( function(e) {
    e.preventDefault();
	$( "#intro").hide();
    $( "#instafeed" ).load();
});

$( "#resume" ).click( function(e) {
    e.preventDefault();
	$( "#intro").hide();
    $( "#content" ).load( "resume.html" );
});

 $( "#contact" ).click( function(e) {
    e.preventDefault();
	$( "#intro").hide();
    $( "#content" ).load( "contact.html" );
});
});
