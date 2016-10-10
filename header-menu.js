var img = ["images/books.jpg",
			"images/home.jpg",
			"images/about.jpg",
			"images/resume.jpg",
			"images/github.jpg",
			"images/projects.jpg"];

var inc = 1; // increments through images
var INTERVAL = 6000; // timing interval for image switch
var fadeMe = new Image();

function changeImg(){
	var header = document.getElementById("header");
	if (header) {
		//fadeOut(fadeMe, 0);
		fadeMe = header.style.backgroundImage = "url("+img[inc]+")";
		//fadeIn(fadeMe, 100);
	}
	if ((inc+1) === img.length) {
		inc=0;
	}
	else {
		inc=inc+1;
	}
}
/**
function fadeOut(dark) {
	if (dark <= 100) {
		dark = dark - 2;
		header.style.opacity = dark/100;
		header.style.filter = 'alpha'(opacity=dark); // thanks, ie :/
		setTimeout(fadeIn(dark), 100);
	}
}

function fadeIn(dark) {
	if (dark <= 1) {
		dark = dark + 2;
		header.style.opacity = dark/100;
		header.style.filter = 'alpha'(opacity=dark);
		setTimeout(fadeIn(dark), 100);
	}
} 
**/
function timer() {
	setInterval(changeImg, INTERVAL);
}