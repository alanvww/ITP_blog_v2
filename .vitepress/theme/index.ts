// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import layout from './Layout.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			'doc-bottom': () => h('div', 'Hello, World!'),
		});
	},
	enhanceApp({ app, router, siteData }) {
		// ...
	},
} satisfies Theme;
