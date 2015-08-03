jQuery(document).ready(function($) {  
 	"use strict"
	
	var menuId = '.menu-stickymenu-container';
	var showMenuLabel = $(menuId +' .show-menu');
	var stickyNavTop = $(menuId).offset().top; 

	$(window).scroll(function(){  
		var scrollTop = $(window).scrollTop();  

		if (scrollTop > stickyNavTop) {   
			$(menuId).addClass('sticky-header'); 
		} else {
			$(menuId).removeClass('sticky-header');   
		}  
	});
});