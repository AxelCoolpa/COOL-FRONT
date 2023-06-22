import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				OrangeCooL: '#ce452a',
				GreenCooL: '#109460',
			},
			boxShadow: {
				CooL: '0px 0px 10px rgba(0, 0, 0, 0.1)',
			},
			backgroundImage: {
				OrangeToGreen: 'linear-gradient(205.37deg, #CE452A 6.36%, #109460 100.07%)',
			},
			transitionDelay: {
				transitionIn: 'opacity: 0 transition: opacity 600ms ease-in',
				transitionOp: 'opacity: 1'
			}
		},
	},
	plugins: [
		plugin(function({addComponents}) {
			addComponents({
				".fadeEnter": {opacity: 0},
				".fadeTransition": {transition: 'opacity 600ms ease-in'},
				".fadeEnterActive": {opacity: 1}
			})
		})
		

	],
}
