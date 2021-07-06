/** @type {import('@sveltejs/kit').Config} */
import path from 'path';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$partials: path.resolve('./src/partials')
				}
			}
		}
	}
};

export default config;