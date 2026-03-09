import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';
import metadata from './block.json';
import variations from './variations';
import { iconsMap } from './icons';
import { createElement, isValidElement } from '@wordpress/element';

const getPathD = ( IconComponent ) => {
	if ( ! IconComponent ) {
		return '';
	}

	let iconInstance = isValidElement( IconComponent )
		? IconComponent
		: createElement( IconComponent );

	if ( typeof iconInstance.type === 'function' ) {
		iconInstance = iconInstance.type( iconInstance.props );
	}

	if ( ! isValidElement( iconInstance ) ) {
		return '';
	}

	const children = Array.isArray( iconInstance.props.children )
		? iconInstance.props.children
		: [ iconInstance.props.children ];

	const pathElements = children
		.map( ( child ) =>
			typeof child.type === 'function' ? child.type( child.props ) : child
		)
		.filter(
			( child ) => isValidElement( child ) && child.type === 'path'
		);

	if ( ! pathElements.length ) {
		return '';
	}

	return pathElements[ 0 ].props.d || '';
};

registerBlockType( metadata.name, {
	category: 'camaleaun-icons',
	variations,
	edit: ( { attributes, context } ) => {
		const iconName = attributes.name;
		const IconComponent = iconsMap[ iconName ];
		const dValue = getPathD( IconComponent );

		return iconName ? (
			<svg
				width="24"
				height="24"
				viewBox="0 0 150 150"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path data-name={ iconName } d={ dValue }></path>
			</svg>
		) : (
			<></>
		);
	},
	save: ( { attributes } ) => {
		const iconName = attributes.name;
		const IconComponent = iconsMap[ iconName ];
		const dValue = getPathD( IconComponent );

		return iconName ? (
			<path data-name={ iconName } d={ dValue }></path>
		) : (
			<></>
		);
	},
} );

variations.forEach( ( variation ) => {
	registerBlockVariation( 'camaleaun/icon-path', {
		name: variation.name,
		title: variation.title,
		icon: variation.icon,
		attributes: variation.attributes,
		isDefault: variation.isDefault,
		example: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 150 150"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path d={ getPathD( iconsMap[ variation.name ] ) } />
			</svg>
		),
	} );
} );
