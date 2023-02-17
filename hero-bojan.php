<?php
/*
*Plugin Name: Hero Bojan Custom block
*Description: Custom block for hero section
*/

function hero_bojan_custom_block_script_register(){
	wp_enqueue_script('hero-bojan-custom-block', plugin_dir_url(__FILE__).'dist/index.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true);
}
add_action('enqueue_block_editor_assets', 'hero_bojan_custom_block_script_register');

?>
