// noinspection JSUnusedGlobalSymbols

import preprocess from 'svelte-preprocess'
import adapter_static from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter_static({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),
		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE', 'OPTIONS']
		},
		prerender: {
			default: true
		},
		vite: {
			build: {
				chunkSizeWarningLimit: 2000,
				sourcemap: true
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: `@use "src/variables.scss" as *;`
					}
				}
			}
		}
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `@use "src/variables.scss" as *;`
			}
		})
	]
}

export default config