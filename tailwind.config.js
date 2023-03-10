/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				nav_icon_color: "#404040",
				border_color: "#ebecf0",
				bg_2: "#ebecf0",
				text_1: "#00101b",
				text_2: "#8c8e92",
			},
			backgroundImage: {
				"cactus-pattern": "url('/src/assets/bg-cactus.svg')",
				ballon: "url('/src/assets/ballon.svg')",
				"dark-cactus-pattern": "url('/src/assets/dark-bg-cactus.svg')",
				"dark-ballon": "url('/src/assets/dark-ballon.svg')",
			},
		},
	},
	plugins: [],
};
