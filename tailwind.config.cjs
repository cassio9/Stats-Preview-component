/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				VeryDarkBlueBG: "hsl(233, 47%, 7%)",
				DarkUnsaturatedBlueCard: "hsl(244, 38%, 16%)",
				SoftViolet: "hsl(277, 64%, 61%)",
				SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
			},
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
				LexendDeca: ["Lexend Deca", "sans-serif"],
			},
		},
	},
	plugins: [],
};
