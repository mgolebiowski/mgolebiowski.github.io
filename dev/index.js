require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('vanilla-tilt/dist/vanilla-tilt.babel.js');
require('hammerjs/hammer.js')
require('./style.scss');

var touchEvt = new Hammer(document.querySelector(".darkness"));


document.querySelector(".darkness").onclick=function(e){
	if(e.target == this)
		this.style.display = "none";
}

const slides=["dist/metronic-main.png","dist/metronic-produkt.png", "dist/metronic-mobile.png"];
var slideNr = 0;

const prevSlide = function(){
	--slideNr;
	if(slideNr<0) 
		slideNr = slides.length-1;
	document.querySelector(".pic-main img").src=slides[slideNr];
}
const nextSlide = function(){
	++slideNr;
	if(slideNr>(slides.length-1))
		slideNr = 0;
	document.querySelector(".pic-main img").src=slides[slideNr];
}

touchEvt.on("swipeleft", prevSlide);
touchEvt.on("swiperight", nextSlide);

document.onkeydown = function(e){
	e = e || window.event;
	
	if(e.keyCode == '37')
		prevSlide();
	else if(e.keyCode == '39')
		nextSlide();
}

document.querySelector(".prev").onclick = prevSlide;
document.querySelector(".next").onclick = nextSlide; 

function openBox(){
	document.querySelector(".darkness").style.display = "block";
}
window.openBox = openBox;

