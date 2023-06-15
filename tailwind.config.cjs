/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans-serif']
			}

		},
		colors: {
			'light-gray': '#F4F4F4',
		},
		screens: {
			'desktop': '1500px',
			'mobile': '375px',
			'tablet': '700px',
			'laptop': "900px"
		}

	},
	plugins: [],
}
