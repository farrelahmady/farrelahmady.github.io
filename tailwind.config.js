module.exports = {
	content: ["index.html"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					md: "4rem",
					lg: "8rem",
					xl: "12rem",
				},
			},
			colors: {
				dark: "#2F384A",
				light: "#FFFDF8",
				gray: "#717784",
				"primary-500": "#FFF4DB",
				"primary-400": "#FFF6E2",
				"primary-300": "#FFF8E9",
				"primary-200": "#FFFBF1",
				"primary-100": "#FFFDF8",
				"secondary-600": "#028C73",
				"secondary-500": "#009176",
				"secondary-400": "#33A791",
				"secondary-300": "#66BDAD",
				"secondary-200": "#99D3C8",
				"secondary-100": "#CCE9E4",
			},
			fontFamily: {
				inter: ["Inter"],
				firaCode: ["Fira Code"],
			},
		},
	},
	plugins: [],
};
