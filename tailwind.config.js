import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// screens: {
			// 	sm: '576px',
			// 	'sm-max': { max: '576px' },
			// 	md: '768px',
			// 	'md-max': { max: '768px' },
			// 	lg: '992px',
			// 	'lg-max': { max: '992px' },
			// 	xl: '1200px',
			// 	'xl-max': { max: '1200px' },
			// 	'2xl': '1320px',
			// 	'2xl-max': { max: '1320px' },
			// 	'3xl': '1600px',
			// 	'3xl-max': { max: '1600px' },
			// 	'4xl': '1850px',
			// 	'4xl-max': { max: '1850px' },
			// },
			colors: {
				OrangeCooL: '#ce452a',
				GreenCooL: '#109460',
			},
			boxShadow: {
				CooL: '0px 0px 10px rgba(0, 0, 0, 0.1)',
			},
			shadow: {
				500: 'rgba(112, 144, 176, 0.08)',
			},
			backgroundImage: {
				OrangeToGreen: 'linear-gradient(205.37deg, #CE452A 6.36%, #109460 100.07%)',
			},
			transitionDelay: {
				transitionIn: 'opacity: 0 transition: opacity 600ms ease-in',
				transitionOp: 'opacity: 1',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				dm: ['DM Sans', 'sans-serif'],
			},
			borderRadius: {
				primary: '20px',
			},
		},
	},
	plugins: [],
}
