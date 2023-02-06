import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrivero.net',
	integrations: [
		mdx(),
		sitemap(),
		NetlifyCMS({
			config: {
				disableIdentityWidgetInjection: true,
				// Use Netlify’s “Git Gateway” authentication and target our default branch
				backend: {
					name: 'git-gateway',
					branch: 'latest',
				},
				// Configure where our media assets are stored & served from
				media_folder: 'public/assets/blog',
				public_folder: '/assets/blog',
				// Configure the content collections
				collections: [
					{
						name: 'page',
						label: 'Pages',
						label_singular: 'Page',
						folder: 'src/pages',
						create: true,
						delete: true,
						fields: [
						  { name: 'title', widget: 'string', label: 'Post Title' },
						  { name: 'body', widget: 'markdown', label: 'Post Body' },
						  { name: 'slug', widget: 'string', label: 'Slug', required: false },
						  { name: "layout", widget: "hidden", label: "Layout", default: "../layouts/Page.astro"}
						],
					  },
					{
						name: 'post',
						label: 'Posts',
						label_singular: 'Post',
						folder: 'src/pages/p',
						create: true,
						delete: true,
						fields: [
							{ name: 'title', widget: 'string', label: 'Post Title' },
							{
								name: 'publishDate',
								widget: 'datetime',
								format: 'DD MMM YYYY',
								date_format: 'DD MMM YYYY',
								time_format: false,
								label: 'Publish Date',
							},
							{ name: 'author', widget: 'string', label: 'Author Name', required: false },
							{ name: 'description', widget: 'string', label: 'Description', required: false },
							{ name: 'body', widget: 'markdown', label: 'Post Body' },
							{ name: "layout", widget: "hidden", label: "Layout", default: "../../layouts/Page.astro"}
						],
					},
				],
			},
		}),
	],
});
