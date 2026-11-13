import { defineConfig } from 'vitepress';

export default defineConfig({
	base: '/social-gallery-block/',
	title: 'Social Gallery Block',
	description:
		'Interactive documentation for the Social Gallery Block WordPress plugin.',
	themeConfig: {
		logo: '/icon.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/getting-started' },
			{
				text: 'Download',
				link: 'https://wordpress.org/plugins/social-gallery-block/',
			},
		],
		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting Started', link: '/guide/getting-started' },
					{ text: 'FAQ', link: '/guide/faq' },
				],
			},
			{
				text: 'Blocks',
				items: [
					{ text: 'Instagram Gallery', link: '/guide/instagram' },
					{ text: 'Twitter Gallery', link: '/guide/twitter' },
					{ text: 'RSS Gallery', link: '/guide/rss' },
				],
			},
			{
				text: 'Usage & Integration',
				items: [
					{ text: 'Shortcode Guide', link: '/guide/shortcode' },
				],
			},
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/vanpariyar/social-gallery-block',
			},
		],
		footer: {
			message: 'Released under the GPLv2 License.',
			copyright: 'Copyright © 2024-present Ronak Vanpariya',
		},
	},
});
