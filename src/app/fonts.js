import { Saira, Inter, Noto_Sans_Mono } from "next/font/google";
import localFont from "@next/font/local";

export const saira = Saira({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-saira",
	display: "swap",
});

export const inter = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const noto = Noto_Sans_Mono({
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-noto",
	display: "swap",
});

export const starlitDrive = localFont({
	src: [
		{
			path: "../../public/assets/fonts/starlit_drive-webfont.woff",
			weight: "400",
		},
	],
	variable: "--font-starlit",
});
