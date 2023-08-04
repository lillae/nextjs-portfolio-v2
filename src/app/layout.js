import "./globals.css";
import { saira, inter } from "./fonts";
import { strings } from "../strings/strings";

import { Header, Footer } from "@/components/layout";

export const metadata = {
	title: "Lillaev",
	description: "Frontend portfolio site",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${saira.variable} font-saira`}>
				<Header strings={strings.header} />
				{children}
				<Footer strings={strings.footer} />
			</body>
		</html>
	);
}
