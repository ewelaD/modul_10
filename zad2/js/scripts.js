$(function(){
	var carouselList = $("#carousel ul"),
		interval = setInterval(function() {
	carouselList.animate({'marginLeft':-300}, 3000, function() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		});
	});
});
