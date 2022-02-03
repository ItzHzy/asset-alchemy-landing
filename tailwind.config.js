module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	content: [],
	theme: {
		extend: {
			rounded: "5px",
			colors: {
				white: "#FAF9F6",
				primary: {
					200: "#ffb870",
					300: "#ffad5c",
					400: "#ffa347",
					500: "#ff9933",
					600: "#e68a2e",
					700: "#cc7a29",
					800: "#b36b24",
				},
				neutral: {
					200: "#D7D7D8",
					300: "#CBD0D2",
					400: "#ADB5BD",
					500: "#6E7B87",
					600: "#47535C",
					700: "#2A3339",
					800: "#191F23",
				},
				success: "#339933",
				error: "#E01A4F",
				link: "#08A0E9",
			},
		},
	},
	plugins: [],
};
