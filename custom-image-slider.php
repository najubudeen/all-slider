<?php

/**
 * Plugin Name:       Custom Image Slider
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-image-slider
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_image_slider_block_init()
{
    register_block_type(__DIR__ . '/build/custom-image-slider');
}
add_action('init', 'create_block_custom_image_slider_block_init');

// function custom_block_enqueue_scripts() { 
//     wp_enqueue_script('jquery');
//     wp_enqueue_script('custom-editor', plugins_url('/js/custom-block.js', __FILE__), array('jquery'), null, true);

// 	// wp_enqueue_script( 'custom-block-script', 
// 	// plugin_dir_url(__FILE__) . 'js/custom-block.js', 
// 	// array('jquery'),  
// 	// null,
// 	// true 
//     // ); 
// 	wp_enqueue_script('jquery');
    
// } 
// add_action('wp_enqueue_scripts', 'custom_block_enqueue_scripts');


// function enqueue_custom_admin_scripts() {
//     if (is_admin()) {
//         wp_enqueue_script('custom-editor', plugins_url('/js/custom-block.js', __FILE__), array('jquery'), null, true);
//     }

    
// }
// add_action('admin_enqueue_scripts', 'enqueue_custom_admin_scripts');



function add_custom_metabox()
{
    add_meta_box('custom_metabox', 'Custom Metabox', 'custom_metabox_callback', 'post', 'normal', 'high');
}
add_action('add_meta_boxes', 'add_custom_metabox');
function custom_metabox_callback($post)
{
    $value = get_post_meta($post->ID, '_custom_metabox_key', true); ?>
    <label for="custom_metabox_field">Metabox Field:</label>
    <input type="text" id="custom_metabox_field" name="custom_metabox_field" value="<?php echo esc_attr($value); ?>" />
<?php
}
function save_custom_metabox_data($post_id)
{
    if (array_key_exists('custom_metabox_field', $_POST)) {
        update_post_meta(
            $post_id,
            '_custom_metabox_key',
            sanitize_text_field($_POST['custom_metabox_field'])
        );
    }
}
add_action('save_post', 'save_custom_metabox_data');
