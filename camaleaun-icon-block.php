<?php
/**
 * Plugin Name:       GT Icon Block
 * Description:       Icon block to add SVG icons from limited icons library.
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       icon-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function camaleaun_icon_block_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'camaleaun_icon_block_block_init' );

function camaleaun_icon_block_register_categories( $categories ) {
	$categories[] = array(
		'slug'  => 'camaleaun-icons',
		'title' => __( 'GT Icons', 'camaleaun-icon-block' ),
	);
	return $categories;
}
add_filter( 'block_categories_all', 'camaleaun_icon_block_register_categories' );
