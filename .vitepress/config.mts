import { defineConfig } from 'vitepress';
import { markdown } from './config/markdown';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Alan's ITP Blog",
	titleTemplate: `:title - Alan's ITP Blog`,
	description:
		'Documentation, updates and everything else during my time at ITP.',
	srcDir: 'src',
	ignoreDeadLinks: 'localhostLinks',
	cleanUrls: true,
	head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' },
				],
			},
		],

		socialLinks: [],
		search: {
			provider: 'local',
		},
	},
	markdown: markdown, // Markdown配置
});
