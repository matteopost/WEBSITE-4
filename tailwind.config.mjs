/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		
		extend: {
			colors: {
				white: '#f5f5f5', 
				background: 'var(--background)',
				text:'var(--text)'
			},
			fontFamily: {
				'sans': 'Oracle'
			},
			fontSize: {
				xs: '0.78rem',
				sm: '0.9rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			  }
		},

	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {

				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},

				".no-scrollbar": {
					"-ms-overflow-style": "none", 
					"scrollbar-width": "none", 

				},
			};
			addUtilities(newUtilities);
		},
	],
}
