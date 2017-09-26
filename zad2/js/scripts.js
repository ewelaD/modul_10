$(function(){
	//this code will execute after the DOM is loaded
});
var carouselList = $("#carousel ul");
setTimeout(changeSlide, 3000); //after 3 seconds will change the slide once
setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
$(function(changeSlide) {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
});
var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");	