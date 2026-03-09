import { registerBlockType, createBlock } from '@wordpress/blocks';
import {
	useBlockProps,
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { SVG, Path } from '@wordpress/primitives';

import './style.scss';
import './editor.scss';

import metadata from './block.json';

const GenericIcon = () => (
	<SVG width="24" height="24" viewBox="0 0 24 24">
		<Path
			d="M12 2L15 8H9L12 2zM12 22L9 16H15L12 22zM2 12L8 9V15L2 12zM22 12L16 15V9L22 12z"
			fill="currentColor"
		/>
	</SVG>
);

const PlaceholderIcon = () => (
	<SVG
		width="24"
		height="24"
		viewBox="0 0 150 150"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<Path
			d="M0 76.468 76.468 0 150 73.532 73.532 150z"
			fill="currentColor"
		/>
	</SVG>
);

registerBlockType( metadata.name, {
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( attributes ) => {
					// Obter a URL da imagem e o tamanho (width)
					const imageUrl = attributes.url;
					const width = attributes.width; // width será undefined se não estiver presente
					console.log( 'core/image attributes', attributes );
					console.log( 'core/image imageUrl', imageUrl );
					console.log( 'core/image width', width );

					// Extrair o nome do arquivo da URL (sem a extensão .svg)
					const iconName = imageUrl
						.split( '/' )
						.pop()
						.replace( '.svg', '' );
					console.log( 'core/image iconName', iconName );

					const blockAttributes = {};

					// Construir o objeto de atributos para o novo bloco camaleaun/icon
					const innerBlocks = [
						createBlock( 'camaleaun/icon-path', {
							name: iconName, // Usar o nome do arquivo como nome do ícone
						} ),
					];

					// Verificar se o width está presente
					// if (width) {
					// 	// Se o width existir, adicionamos o fontSize
					// 	blockAttributes.styles = {
					// 		typography: {
					// 			fontSize: `${width}px`, // Usar o fontSize baseado no width da imagem
					// 		},
					// 	};
					// }

					// Retorna o novo bloco camaleaun/icon com ou sem o fontSize
					return createBlock(
						'camaleaun/icon',
						blockAttributes,
						innerBlocks
					);
				},
			},
		],
	},
	icon: GenericIcon,
	edit: ( props ) => {
		const { clientId, isSelected } = props;
		const { removeBlock } = useDispatch( 'core/block-editor' );

		const innerBlocks = useSelect(
			( select ) => select( 'core/block-editor' ).getBlocks( clientId ),
			[ clientId ]
		);

		const hasChild = innerBlocks.length > 0;

		const handleReplaceIcon = () => {
			if ( hasChild ) {
				removeBlock( innerBlocks[ 0 ].clientId );
			}
			setTimeout( () => {
				document
					.querySelector(
						`[data-block="${ clientId }"] .block-editor-button-block-appender`
					)
					?.click();
			}, 100 );
		};

		return (
			<div { ...useBlockProps() }>
				{ hasChild && (
					<BlockControls group="other">
						<ToolbarButton
							label="Substituir"
							text="Substituir"
							icon={ null }
							onClick={ handleReplaceIcon }
						/>
					</BlockControls>
				) }

				<InnerBlocks
					placeholder={ ! isSelected && PlaceholderIcon }
					allowedBlocks={ metadata.allowedBlocks }
					renderAppender={
						hasChild ? false : InnerBlocks.ButtonBlockAppender
					}
				/>
			</div>
		);
	},
	save: ( { attributes } ) => {
		return (
			<svg
				{ ...useBlockProps.save() }
				width="24"
				height="24"
				viewBox="0 0 150 150"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<InnerBlocks.Content />
			</svg>
		);
	},
} );
