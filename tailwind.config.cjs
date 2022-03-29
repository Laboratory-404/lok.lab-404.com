const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

const config = {
	// prefix: 'tw-',

	content: [`./src/**/*.{html,js,svelte,ts}`],

	theme: {
		extend: {}
	},

	plugins: [forms, typography]
}

module.exports = config