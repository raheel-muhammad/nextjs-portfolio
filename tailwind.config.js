const config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,jsx,tsx,mdx}",
		"./src/components/**/*.{js,jsx,tsx,mdx}",
		"./src/app/**/*.{js,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: 'true'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1200px'
			},
			fontFamily: {
				primary: 'var(--font-bebas)',
				secondary: 'var(--font-inter)'
			},
			colors: {
				primary: '#10115f',
				secondary: '#475467',
				accent: {
					DEFAULT: '#7edad2',
					hover: '#79d3cc'
				}
			},
			boxShadow: {
				custom: '0px 14px 54px rgba(0,0,0,0.1)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

module.exports = config;
