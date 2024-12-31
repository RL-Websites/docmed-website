/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html", "./assets/**/*.js"],
	theme: {
		extend: {},
		container: {
			screens: {
				"2xl": "1240px",
			},
		},
	},
	plugins: [],
};
