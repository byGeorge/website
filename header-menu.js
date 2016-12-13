"use strict";

var img = ["images/books.jpg",
			"images/home.jpg",
			"images/about.jpg",
			"images/resume.jpg",
			"images/github.jpg",
			"images/projects.jpg"];
var inc = 1; // increments through images
var INTERVAL = 6000; // timing interval for image switch

function changeImg(){
	// fades and changes background
	$('#headerimage').fadeTo("slow", 0, function()
		{
		    $(this).css("background-image", "url("+img[inc]+")");
		}).fadeTo("slow", .5);
	if ((inc+1) === img.length) {
		inc=0;
	}
	else {
		inc=inc+1;
	}
	$('#headerfader').css("background-image", "url("+img[inc]+")");
}

function showMode(){
	if (location.search.substring(1).split('&') == "mode=Dark") {
		document.getElementById("styleme").setAttribute("href", "bygeorgedark.css");
	}
	else if (location.search.substring(1).split('&') == "mode=80s") {
		document.getElementById("styleme").setAttribute("href", "bygeorge80s.css");
	}
}

function setup() {
	showMode();
	setInterval(changeImg, INTERVAL);
}

