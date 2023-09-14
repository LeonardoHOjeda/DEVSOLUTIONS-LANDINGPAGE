/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'blueSea': {
          '600': '#3a4b61',
          '700': '#313f52',
          '800': '#25303E'
        }
      },
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
      }
    },
	},
	plugins: [],
}
