<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>
<div class="debug">
    <label><input type="checkbox"> Debug</label>
  </div>
<div id="fouc">
    <div class="content-area">
        <div class="showreel parallax-group clearfix">
            <div class="parallax-layer parallax-layer-base">
                <section class="clearfix">
                    <?php
                        $query = new WP_query('pagename=showreel');

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();
                                echo '<div class="entry-content">';
                                the_content();
                                echo '</div>';
                            }
                        }

                        wp_reset_postdata();
                    ?>
                </section>
            </div>
        </div>

        <div class="references parallax-group clearfix">
            <div class="parallax-layer parallax-layer-base">
                <section class="clearfix">
                    <?php
                        $query = new WP_query('pagename=references');

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();
                                echo '<div class="entry-content">';
                                the_content();
                                echo '</div>';
                            }
                        }

                        wp_reset_postdata();
                    ?>
                </section>
            </div>
            <div class="parallax-layer parallax-layer-back">Background references</div>
        </div>

        <div class="aboutme parallax-group clearfix">
            <div class="parallax-layer parallax-layer-base">
                <section class="clearfix">
                    <?php
                        $query = new WP_query('pagename=aboutme');

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();
                                echo '<div class="entry-content">';
                                the_content();
                                echo '</div>';
                            }
                        }

                        wp_reset_postdata();
                    ?>
                </section>
            </div>
            <div class="parallax-layer parallax-layer-back">Background aboutme</div>
        </div>

        <div class="pricing parallax-group clearfix">
            <div class="parallax-layer parallax-layer-base">
                <section class="clearfix">
                    <?php
                        $query = new WP_query('pagename=pricing');

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();
                                echo '<div class="entry-content">';
                                the_content();
                                echo '</div>';
                            }
                        }

                        wp_reset_postdata();
                    ?>
                </section>
            </div>
            <div class="parallax-layer parallax-layer-back">Background pricing</div>
        </div>

        <div class="contact parallax-group clearfix">
            <div class="parallax-layer parallax-layer-base">
                <section class="clearfix">
                    <?php
                        $query = new WP_query('pagename=contact');

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();
                                echo '<div class="entry-content">';
                                the_content();
                                echo '</div>';
                            }
                        }

                        wp_reset_postdata();
                    ?>
                </section>
            </div>
        </div>
    </div>
</div>
<script>
    var debugInput = document.querySelector("input");
    function updateDebugState() {
        if(document.body.classList){
            document.body.classList.toggle('debug-on', debugInput.checked);
        }
    }
    debugInput.addEventListener("click", updateDebugState);
  </script>
<?php get_footer(); ?>
