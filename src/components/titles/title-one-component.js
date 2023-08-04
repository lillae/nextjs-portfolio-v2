import { starlitDrive } from "@/app/fonts";

const TitleOne = ({ children }) => {
	return (
		<h1
			className={`${starlitDrive.variable} font-starlit text-100 leading-tight drop-shadow-headings`}>
			{children}
		</h1>
	);
};

export default TitleOne;
