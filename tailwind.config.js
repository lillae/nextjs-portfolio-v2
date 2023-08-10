/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "360px",
			"1xs": "390px",
			"2xs": "410px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			"1lg": "1150px",
			xl: "1280px",
			"1xl": "1330px",
			"2xl": "1400px",
			"3xl": "1536px",
			xxl: "2256px",
		},

		extend: {
			colors: {
				accent: "#e3ffd8",
				primary: "#fff",
				layout: "#1f1d1c",
			},
			backgroundImage: {
				mobile: "url('/assets/images/backgrounds/bg-xs-2.jpg')",
				tablet: "url('/assets/images/backgrounds/bg-xs.jpg')",
				large: "url('/assets/images/backgrounds/lg-bg.jpg')",
				desktop: "url('/assets/images/backgrounds/frame4-grainy.jpg')",
				"footer-gradient":
					"linear-gradient(to-bottom, rgba(255,255,255,0), rgba(31,29,28,0.10))",
			},
			boxShadow: {
				btn: "rgba(255, 255, 255, 0.14) 0px 0px 30px, rgba(111, 170, 160, 0) 0px 0px 10px, rgba(255, 255, 147, 0.33) 0px 0px 1px",
				"btn-hover":
					"0px 0px 10px rgba(255, 255, 147,0.2), 0px 0px 0px rgba(255,255,255, 0.1), 0px 0px 10px rgba(255,255,255, 0.1)",
				scroll: "inset 0 0 2px white",
			},
			dropShadow: {
				headings: "0px 1px 0.3em rgba(255, 255, 255, 0.6)",
				text: "0px 0px 0.5px #fff",
			},
			fontFamily: {
				saira: ["var(--font-saira)"],
				inter: ["var(--font-inter)"],
				noto: ["var(--font-noto)"],
				starlit: ["var(--font-starlit)"],
			},
			fontSize: {
				15: "15px",
				17: "17px",
				22: "22px",
				40: "40px",
				64: "64px",
				74: "74px",
				100: "100px",
			},
			maxWidth: {
				container: "1100px",
			},
			spacing: {
				50: "50px",
				70: "70px",
				95: "95px",
				150: "150px",
			},
		},
	},
	plugins: [],
};
