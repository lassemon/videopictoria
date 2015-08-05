jQuery(document).ready(function($) {  
 	"use strict";
	
	var menuId = '.menu-stickymenu-container';
	var scrollAreaClass = 'content-area';
	var stickyHeaderClass = 'sticky-header';

	var stickyMenuContainer = $(menuId);
	var stickyMenu = stickyMenuContainer.find('#menu-stickymenu');
	var showMenuLabel = $(menuId +' .show-menu');
	var stickyNavBottom = stickyMenuContainer.offset().bottom; 
	var sectionOffsets = [];
	var navHeight = stickyMenu.outerHeight();

	var animationOngoing = false;

	var initNavHeight = function(){
		var showMenuButton = stickyMenuContainer.find('.show-menu');

		if(showMenuButton.is(":visible")){
			navHeight = showMenuButton.outerHeight();
		}
		else {
			navHeight = stickyMenu.outerHeight();
		}
	}

	var initSectionOffsets = function(){
		initNavHeight();

		$('.content-area > section').each(function(index, value){
			sectionOffsets[index] = ($(this).outerHeight() * index) - navHeight;
		});
	};

	$(window).resize(function(){
		initSectionOffsets();
	});

	if(location.hash){
		stickyMenuContainer.find('a[href='+location.hash+']').addClass('selected');
	} else {
		stickyMenuContainer.find('a:first').addClass('selected');
	}

	var initWaypoints = function(){
		var showreelWaypoint = new Waypoint({
			element: document.getElementById('showreel').getElementsByClassName('entry-content'),
			handler: function() {
				initSectionOffsets();
				var sectionName = $(this.element).parents('.parallax-group').attr('id');
				var clickedLink = stickyMenuContainer.find('a[href=#'+sectionName+']');
				setSelectedMenuItemStyles(clickedLink);
			},
			context: document.getElementsByClassName(scrollAreaClass),
			offset: '30%'
		});

		var referencesWaypoint = new Waypoint({
			element: document.getElementById('references').getElementsByClassName('entry-content'),
			handler: function() {
				if(!animationOngoing) {
					initSectionOffsets();
					var sectionName = $(this.element).parents('.parallax-group').attr('id');
					var clickedLink = stickyMenuContainer.find('a[href=#'+sectionName+']');
					setSelectedMenuItemStyles(clickedLink);
				}
			},
			context: document.getElementsByClassName(scrollAreaClass),
			offset: '50%'
		});

		var aboutMeWaypoint = new Waypoint({
			element: document.getElementById('aboutme').getElementsByClassName('entry-content'),
			handler: function() {
				if(!animationOngoing) {
					initSectionOffsets();
					var sectionName = $(this.element).parents('.parallax-group').attr('id');
					var clickedLink = stickyMenuContainer.find('a[href=#'+sectionName+']');
					setSelectedMenuItemStyles(clickedLink);
				}
			},
			context: document.getElementsByClassName(scrollAreaClass),
			offset: '30%'
		});

		var pricingWaypoint = new Waypoint({
			element: document.getElementById('pricing').getElementsByClassName('entry-content'),
			handler: function() {
				if(!animationOngoing) {
					initSectionOffsets();
					var sectionName = $(this.element).parents('.parallax-group').attr('id');
					var clickedLink = stickyMenuContainer.find('a[href=#'+sectionName+']');
					setSelectedMenuItemStyles(clickedLink);
				}
			},
			context: document.getElementsByClassName(scrollAreaClass),
			offset: '50%'
		});

		var contactWaypoint = new Waypoint({
			element: document.getElementById('contact').getElementsByClassName('entry-content'),
			handler: function() {
				if(!animationOngoing) {
					initSectionOffsets();
					var sectionName = $(this.element).parents('.parallax-group').attr('id');
					var clickedLink = stickyMenuContainer.find('a[href=#'+sectionName+']');
					setSelectedMenuItemStyles(clickedLink);
				}
			},
			context: document.getElementsByClassName(scrollAreaClass),
			offset: '70%'
		});
	};

	/* Scroll to specific section on front page */
	$(function() {
		stickyMenuContainer.find('.menu a[href*=#]:not([href=#])').click(function(event) {
			event.preventDefault();

			var clickedLink = $(this);
			var clickedIndex = clickedLink.parent().index();

			if(showMenuLabel.is(':visible')) {
				showMenuLabel.click();
			}

			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('.menu [name=' + this.hash.slice(1) +']');

				if(Modernizr.history) {
					history.pushState(null, null, this.hash);
				}

				if (target.length && clickedIndex >= 0) {
					animationOngoing = true;
					$('.'+scrollAreaClass).animate({
						scrollTop: sectionOffsets[clickedIndex]
					}, 500, function(){
						animationOngoing = false;
					});
				}

				setSelectedMenuItemStyles(clickedLink);
			}

		});
	});

	var setSelectedMenuItemStyles = function(clickedLink){
		clickedLink.parent().siblings().find("a").removeClass("selected");
		clickedLink.addClass("selected");
	};

	jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	};

	var init = function(){
		initWaypoints();
		initSectionOffsets();	
	};
	
	init();
});