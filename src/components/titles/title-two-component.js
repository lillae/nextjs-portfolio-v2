import { starlitDrive } from "@/app/fonts";

const TitleTwo = ({ children }) => {
	return (
		<h2
			className={`${starlitDrive.variable} font-starlit text-74 drop-shadow-headings`}>
			{children}
		</h2>
	);
};

export default TitleTwo;
