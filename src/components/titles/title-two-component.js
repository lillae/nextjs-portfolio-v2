import { starlitDrive } from "@/app/fonts";

const TitleTwo = ({ children, extraStyles }) => {
	return (
		<h2
			className={`${extraStyles} ${starlitDrive.variable} font-starlit text-74 drop-shadow-headings leading-tight`}>
			{children}
		</h2>
	);
};

export default TitleTwo;
