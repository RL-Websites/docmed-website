/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html", "./assets/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "var(--primary)",
				},
				secondary: "var(--secondary)",
				white: "var(--white)",
				light: "var(--light)",
				green: "var(--green)",
				yellow: "var(--yellow)",
				cyan: "var(--cyan)",
				"aqua-1": "var(--aqua-1)",
				"aqua-2": "var(--aqua-2)",
				"light-purple": "var(--light-purple)",
				"blue-light-1": "var(--blue-light-1)",
				"blue-light-2": "var(--blue-light-2)",
				"blue-light-3": "var(--blue-light-3)",
				"blue-light-4": "var(--blue-light-4)",
			},
		},
		container: {
			screens: {
				"2xl": "1240px",
			},
		},
	},
	plugins: [],
};
