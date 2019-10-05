// JavaScript Document

$(function(){

	var speed = 50;
	$('.scroll').mousewheel(function(event, mov) {
		//ie firefox
		$(this).scrollLeft($(this).scrollTop() - mov * speed);
		//webkit
		$('body').scrollLeft($('body').scrollTop() - mov * speed);
		return false;
	});
	
	$('.scroll').jScrollPane({showArrows:true});
});