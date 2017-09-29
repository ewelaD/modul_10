$(function(){
	var carouselList = $("#carousel ul");
		interval = setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-1500}, 8000, moveFirstSlide);
	};
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");
	function moveFirstSlide() {
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
});
