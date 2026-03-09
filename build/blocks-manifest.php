<?php
// This file is generated. Do not modify it manually.
return array(
	'icon' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'camaleaun/icon',
		'version' => '1.1.0',
		'title' => 'Ícone',
		'category' => 'widgets',
		'icon' => 'smiley',
		'example' => array(
			
		),
		'attributes' => array(
			
		),
		'supports' => array(
			'html' => true,
			'__experimentalBorder' => array(
				'radius' => true,
				'__experimentalDefaultControls' => array(
					'radius' => true
				)
			),
			'color' => array(
				'text' => true,
				'background' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'border-radius' => true,
			'typography' => array(
				'fontSize' => true
			)
		),
		'allowedBlocks' => array(
			'camaleaun/icon-path'
		),
		'textdomain' => 'camaleaun',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'icon-path' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'camaleaun/icon-path',
		'version' => '1.1.0',
		'title' => 'Ícone Path',
		'category' => 'widgets',
		'example' => array(
			
		),
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'path',
				'attribute' => 'data-name'
			)
		),
		'supports' => array(
			'html' => false
		),
		'parent' => array(
			'camaleaun/icon'
		),
		'textdomain' => 'camaleaun',
		'editorScript' => 'file:./index.js'
	)
);
