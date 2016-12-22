// JavaScript Document

$(document).ready(function() {

  $( "#about" ).click( function() {
    window.location = "index.html";
});

 $( "#portfolio" ).click( function(e) {
    e.preventDefault();
	$( "#intro").hide();
    $( "#content" ).load( "#" );
});