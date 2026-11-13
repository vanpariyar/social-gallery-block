import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment, useState, useEffect } from '@wordpress/element';
import {
	TextControl,
	ToggleControl,
	RangeControl,
	PanelBody,
	PanelRow,
	Button,
	Notice,
} from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

import './editor.scss';
import './style.scss';
import metadata from './block.json';

const fnum = ( x ) => {
	if ( isNaN( x ) ) {
		return x;
	}
	if ( x < 9999 ) {
		return x;
	}
	if ( x < 1000000 ) {
		return Math.round( x / 1000 ) + 'K';
	}
	if ( x < 10000000 ) {
		return ( x / 1000000 ).toFixed( 2 ) + 'M';
	}
	if ( x < 1000000000 ) {
		return Math.round( x / 1000000 ) + 'M';
	}
	if ( x < 1000000000000 ) {
		return Math.round( x / 1000000000 ) + 'B';
	}
	return '1T+';
};

const getProxyUrl = ( url ) => {
	if ( ! url ) {
		return '';
	}
	const root =
		typeof window !== 'undefined' &&
		window.wpApiSettings &&
		window.wpApiSettings.root
			? window.wpApiSettings.root
			: '/wp-json/';
	const endpoint =
		root.replace( /\/$/, '' ) + '/instagram-post-grid/v1/proxy-image';
	return addQueryArgs( endpoint, {
		url,
	} );
};

const InstaPanel = ( { props, getUserInfo, error, isLoading } ) => {
	return (
		<PanelBody
			title={ __(
				'Instagram Settings',
				'gutenberg-instagram-post-grid'
			) }
			initialOpen={ true }
		>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }
			<PanelRow>
				<strong>
					{ __(
						'Note: This will only work for public Instagram accounts.',
						'gutenberg-instagram-post-grid'
					) }
				</strong>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					checked={ props.attributes.showFollowers }
					label={ __(
						'Show follower count',
						'gutenberg-instagram-post-grid'
					) }
					onChange={ () =>
						props.setAttributes( {
							showFollowers: ! props.attributes.showFollowers,
						} )
					}
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					checked={ props.attributes.isCroped }
					label={ __(
						'Crop images?',
						'gutenberg-instagram-post-grid'
					) }
					onChange={ () =>
						props.setAttributes( {
							isCroped: ! props.attributes.isCroped,
						} )
					}
				/>
			</PanelRow>
			<PanelRow>
				<p>
					{ __(
						'Column Settings:',
						'gutenberg-instagram-post-grid'
					) }
				</p>
				<RangeControl
					value={ props.attributes.column }
					onChange={ ( column ) => props.setAttributes( { column } ) }
					min={ 1 }
					max={ 8 }
				/>
			</PanelRow>
			<PanelRow>
				<p>{ __( 'Post Count:', 'gutenberg-instagram-post-grid' ) }</p>
				<RangeControl
					value={ props.attributes.postCount }
					onChange={ ( postCount ) =>
						props.setAttributes( { postCount } )
					}
					min={ 1 }
					max={ 12 }
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					value={ props.attributes.userName }
					label={ __(
						'Enter Instagram username',
						'gutenberg-instagram-post-grid'
					) }
					onChange={ ( val ) =>
						props.setAttributes( { userName: val } )
					}
					onKeyDown={ ( e ) => {
						if ( e.key === 'Enter' ) {
							e.preventDefault();
							getUserInfo();
						}
					} }
				/>
			</PanelRow>
			{ props.attributes.userName ? (
				<PanelRow>
					<Button
						isPrimary
						isBusy={ isLoading }
						disabled={ isLoading }
						onClick={ () => getUserInfo() }
					>
						{ __(
							'Fetch Details',
							'gutenberg-instagram-post-grid'
						) }
					</Button>
				</PanelRow>
			) : (
				''
			) }
		</PanelBody>
	);
};

const MyPanel = ( { props, getUserInfo, error, isLoading } ) => (
	<InspectorControls>
		<InstaPanel
			props={ props }
			getUserInfo={ getUserInfo }
			error={ error }
			isLoading={ isLoading }
		/>
	</InspectorControls>
);

const InstagramEmbed = ( {
	props,
	getUserInfo,
	isServer = false,
	error,
	isLoading,
} ) => {
	const { attributes } = props;
	const { userObject, column, isCroped, postCount, showFollowers, userName } =
		attributes;

	if ( ! userObject || ! userObject.userObjectLoaded ) {
		if ( isServer ) {
			return null;
		}
		return (
			<div className="instagram-placeholder">
				<h3>{ metadata.title }</h3>
				<InstaPanel
					props={ props }
					getUserInfo={ getUserInfo }
					error={ error }
					isLoading={ isLoading }
				/>
			</div>
		);
	}

	const userData =
		userObject.userObject && userObject.userObject.graphql
			? userObject.userObject.graphql.user
			: null;

	if ( ! userData ) {
		return isServer ? null : (
			<div>
				{ sprintf(
					/* translators: %s: Instagram username */
					__(
						'No Instagram data found for user: %s',
						'gutenberg-instagram-post-grid'
					),
					userName
				) }
			</div>
		);
	}

	return (
		<Fragment>
			<FollowerCount
				count={
					userData ? fnum( userData.edge_followed_by.count ) : ''
				}
				showFollowers={ showFollowers }
			/>
			<figure
				className={ `wp-block-gallery columns-${ column } ${
					isCroped ? 'is-cropped' : ''
				}` }
			>
				<ul className="blocks-gallery-grid">
					{ userData.edge_owner_to_timeline_media.edges
						.slice( 0, postCount )
						.map( ( value, key ) => {
							const shortcode =
								value.node.shortcode || value.node.code || '';
							const displayUrl =
								value.node.display_url ||
								value.node.display_uri ||
								'';
							const captionText = value.node.caption?.text || '';

							return (
								<li key={ key } className="blocks-gallery-item">
									<figure>
										<a
											href={ `https://www.instagram.com/p/${ shortcode }/` }
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={ getProxyUrl(
													displayUrl
												) }
												alt={ captionText }
												tabIndex="0"
											/>
										</a>
									</figure>
								</li>
							);
						} ) }
				</ul>
			</figure>
		</Fragment>
	);
};

const FollowerCount = ( { count, showFollowers } ) => (
	<Fragment>
		{ showFollowers && count ? (
			<div className="instagram-follower-count">
				{ sprintf(
					/* translators: %s: follower count */
					__( 'Followers: %s', 'gutenberg-instagram-post-grid' ),
					count
				) }
			</div>
		) : (
			''
		) }
	</Fragment>
);

registerBlockType( metadata.name, {
	edit: function Edit( props ) {
		const [ error, setError ] = useState( null );
		const [ isLoading, setIsLoading ] = useState( false );

		const getUserInfo = async () => {
			let userName = props.attributes.userName;
			userName =
				typeof userName !== 'undefined'
					? userName.replace( /^@/, '' ).trim()
					: 'instagram';
			setError( null );
			setIsLoading( true );

			try {
				const response = await apiFetch( {
					path: `instagram-post-grid/v1/fetch?username=${ encodeURIComponent(
						userName
					) }`,
					method: 'GET',
				} );

				const userObjectLoaded =
					response &&
					typeof response.captcha === 'undefined' &&
					response.graphql
						? 1
						: 0;

				if ( ! userObjectLoaded ) {
					setError(
						__(
							'Could not fetch Instagram data. The account might be private or rate-limited.',
							'gutenberg-instagram-post-grid'
						)
					);
				}

				props.setAttributes( {
					userName,
					userObject: {
						userObject: response,
						userObjectLoaded,
					},
				} );
			} catch ( err ) {
				// eslint-disable-next-line no-console
				console.error( 'Error fetching Instagram data:', err );

				let errorMessage = __(
					'An error occurred while fetching Instagram data.',
					'gutenberg-instagram-post-grid'
				);

				if ( err.message ) {
					errorMessage = err.message;
				} else if ( err.data && err.data.body ) {
					try {
						const body = JSON.parse( err.data.body );
						if ( body.message ) {
							errorMessage = body.message;
						}
					} catch ( e ) {
						// Fallback to default or err.message
					}
				}

				setError( errorMessage );
				props.setAttributes( {
					userObject: { userObject: {}, userObjectLoaded: 0 },
				} );
			} finally {
				setIsLoading( false );
			}
		};

		useEffect( () => {
			if (
				props.attributes.userName &&
				( ! props.attributes.userObject ||
					! props.attributes.userObject.userObjectLoaded )
			) {
				getUserInfo();
			}
		}, [] );

		return (
			<div { ...useBlockProps() }>
				<MyPanel
					props={ props }
					getUserInfo={ getUserInfo }
					error={ error }
					isLoading={ isLoading }
				/>
				<InstagramEmbed
					props={ props }
					getUserInfo={ getUserInfo }
					error={ error }
					isLoading={ isLoading }
				/>
			</div>
		);
	},

	save: () => {
		return null;
	},

	deprecated: [
		{
			attributes: metadata.attributes,
			save: ( props ) => {
				return (
					<div { ...useBlockProps.save() }>
						<InstagramEmbed props={ props } isServer={ true } />
					</div>
				);
			},
		},
	],
} );
