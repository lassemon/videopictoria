<?php

function pictoria_setup() {
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'pictoria' )
	) );
}
add_action( 'after_setup_theme', 'pictoria_setup' );


// add a favicon to your 
function blog_favicon() {
	echo '<link rel="Shortcut Icon" type="image/x-icon" href="'.get_bloginfo('wpurl').'/favicon.ico" />';
}
add_action('wp_head', 'blog_favicon');


// remove junk from head
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);


function custom_enqueue_styles(){
 	wp_enqueue_style('common-styles', get_stylesheet_directory_uri() . '/style.css');
}
add_action( 'wp_enqueue_scripts', 'custom_enqueue_styles', 15 );

function scripts(){
	$jspath = '/.tmp/js/';
	wp_enqueue_script('modernizr', get_stylesheet_directory_uri() . $jspath .'modernizr-build.min.js', array(), '20151601', true);
	wp_enqueue_script('bootstrap', get_stylesheet_directory_uri() . $jspath .'bootstrap.js', array('jquery'), '20151601', true);
	wp_enqueue_script('waypoints', get_stylesheet_directory_uri() . $jspath .'jquery.waypoints.min.js', array('jquery'), '20151601', true);
	if(is_front_page()){
		wp_enqueue_script('frontpage-script', get_stylesheet_directory_uri() . $jspath . 'stickymenu.js', array('jquery'), '20151601', true);
	}
}
add_action('wp_enqueue_scripts', 'scripts', 20);

?>