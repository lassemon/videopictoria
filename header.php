<?php
/**
 * The template for displaying the header
 *
 * @package WordPress
 * @subpackage Pictoria
 * @since Pictoria 1.0
 */
?><!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
  	<meta name="description" content="">
 	<meta name="viewport" content="width=device-width, initial-scale=1">
 	<?php wp_head(); ?>
 	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Vollkorn">
</head>

<body>
<?php
	if(is_front_page()){
	            /* custom menu */
	            wp_nav_menu( array(
	            	'menu' => 'StickyMenu',
	            	'items_wrap' => '<label for="show-menu" class="show-menu">&#9776;</label>
									<input type="checkbox" id="show-menu" role="button">
	            					<ul id="%1$s" class="%2$s">%3$s</ul>'
            	) );
	        }
	        else {
	            wp_nav_menu( array('menu' => 'Sisältösivun Menu' ) );
	        }
?>