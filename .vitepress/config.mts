import { defineConfig } from 'vitepress';
import { markdown } from './config/markdown';
import { getSidebar } from 'vitepress-plugin-auto-sidebar';

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
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Portfolio', link: 'https://beta.alan.ooo' },
		],

		sidebar: {
			'classes/handheld': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/handheld/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/hypercinema': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/hypercinema/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/icm': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/icm/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/ml4w': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/ml4w/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/ml5-research': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/ml5-research/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/pcomp': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/pcomp/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/re-decentralizing-the-web': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/re-decentralizing-the-web/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/rwet': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/rwet/'],
				collapsible: true,
				collapsed: false,
			}),
			'classes/synthetic-architecture': getSidebar({
				contentRoot: '/src/',
				contentDirs: ['classes/synthetic-architecture/'],
				collapsible: true,
				collapsed: false,
			}),
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/alanvww' }],
		search: {
			provider: 'local',
		},
		footer: {
			message: 'Made with ❤️ by Alan Ren, powered by VitePress',
			copyright: 'Copyright © 2023-present',
		},
		editLink: {
			pattern: 'https://github.com/alanvww/itp.alan.ooo/edit/main/src/:path',
		},
	},
	markdown: markdown, // Markdown配置
});
