jQuery(document).ready(function($) {  
 	"use strict"
	
	/* STICKY NAVIGATION */
	var menuId = '.menu-stickymenu-container';
	var stickyMenu = $(menuId);
	var showMenuLabel = $(menuId +' .show-menu');
	var stickyNavTop = $(menuId).offset().top; 
	var sectionOffsets = [];

	var initSectionOffsets = function(){
		$('.content-area > div').each(function(index, value){
			sectionOffsets[index] = $(value).offset().top;
		});
	};

	$( window ).resize(function() {
		initSectionOffsets();
	});
	initSectionOffsets();


	if(location.hash){
		stickyMenu.find('a[href='+location.hash+']').addClass('selected');
	} else {
		stickyMenu.find('a:first').addClass('selected');
		
	}
	

	$(window).scroll(function(){  
		var scrollTop = $(window).scrollTop();  

		if (scrollTop > stickyNavTop) {   
			$(menuId).addClass('sticky-header'); 
		} else {
			$(menuId).removeClass('sticky-header');   
		}  
	});

	/* Scroll to specific section on front page */
	$(function() {
		stickyMenu.find('.menu a[href*=#]:not([href=#])').click(function(event) {
			event.preventDefault();

			var clickedLink = $(this);
			var clickedIndex = clickedLink.parent().index();

			if(showMenuLabel.is(':visible')) {
				showMenuLabel.click();
			}

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('.menu [name=' + this.hash.slice(1) +']');

				if(Modernizr.history) {
					history.pushState(null, null, this.hash);
				}

				if (target.length && clickedIndex >= 0) {
					$('.content-area').animate({
						scrollTop: sectionOffsets[clickedIndex]
					}, 500);
				}

				clickedLink.parent().siblings().find("a").removeClass("selected");
				clickedLink.addClass("selected");

			}

		});
	});

	jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	};
	/* END OF STICKY NAVIGATION */

});