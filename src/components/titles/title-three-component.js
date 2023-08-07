import { saira } from "@/app/fonts";

const TitleThree = ({ children }) => {
	return (
		<h3
			className={`${saira.variable} font-saira text-sm drop-shadow-headings leading-tight uppercase`}>
			{children}
		</h3>
	);
};

export default TitleThree;
