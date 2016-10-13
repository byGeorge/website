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
	$('#headerimage').fadeTo("slow", 0.3, function()
		{
		    $(this).css("background-image", "url("+img[inc]+")");
		}).fadeTo("slow", 1);
	if ((inc+1) === img.length) {
		inc=0;
	}
	else {
		inc=inc+1;
	}
	// change underlying background image
	$('#header').css("background-image", "url("+img[inc]+")");
}

function timer() {
	$('#header').css("background-image", "url("+img[1]+")");
	setInterval(changeImg, INTERVAL);
}