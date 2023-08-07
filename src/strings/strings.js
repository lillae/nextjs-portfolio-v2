import { SlSocialGithub } from "react-icons/sl";
import { GoArrowUpRight } from "react-icons/go";

export const strings = {
	header: {
		nav: [
			{
				title: "Home",
				href: "#home",
				ref: "",
			},
			{
				title: "Projects",
				href: "#latest",
				ref: "",
			},
			{
				title: "About",
				href: "#about",
				ref: "",
			},
			{
				title: "Contact",
				href: "#contact",
				ref: "",
			},
		],
		icons: [
			{
				icon: <SlSocialGithub className='hover:drop-shadow-text' />,
				name: "Github",
				href: "https://github.com/lillae",
			},
		],
	},
	hero: {
		title: "Lilla Varga",
		subtitle: "Frontend Developer",
		btn: {
			text: "My projects",
			href: "#latest",
		},
		email: "",
	},
	latest_projects: {
		title: "Latest projects",
		subtitle: "Some of my latest projects",
		cards: [
			{
				title: "Movie Watchlist",
				stack: [{ name: "React" }, { name: "Redux" }],
				description:
					"Search for movies and add them to your watchlist. Created with React, Redux, Styled Components, Framer Motion and the TMDb API.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/movie.jpg",
					width: "1024",
					height: "576",
					alt: "Movie Watchlist",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-movie-watchlist",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://blissful-swartz-4ad75d.netlify.app/",
					},
				],
			},
			{
				title: "Movie Watchlist",
				stack: [{ name: "React" }, { name: "Redux" }],
				description:
					"Search for movies and add them to your watchlist. Created with React, Redux, Styled Components, Framer Motion and the TMDb API.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/movie.jpg",
					width: "1024",
					height: "576",
					alt: "Movie Watchlist",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-movie-watchlist",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://blissful-swartz-4ad75d.netlify.app/",
					},
				],
			},
			{
				title: "Movie Watchlist",
				stack: [{ name: "React" }, { name: "Redux" }],
				description:
					"Search for movies and add them to your watchlist. Created with React, Redux, Styled Components, Framer Motion and the TMDb API.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/movie.jpg",
					width: "1024",
					height: "576",
					alt: "Movie Watchlist",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-movie-watchlist",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://blissful-swartz-4ad75d.netlify.app/",
					},
				],
			},
		],
	},
	projects: {
		title: "Past projects",
		subtitle: "Simple React and JavaScript projects",
		cards: [
			{
				title: "Movie Watchlist",
				stack: [{ name: "React" }, { name: "Redux" }],
				description:
					"Search for movies and add them to your watchlist. Created with React, Redux and the TMDb API.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/movie.jpg",
					width: "1024",
					height: "576",
					alt: "Movie Watchlist",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-movie-watchlist",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://blissful-swartz-4ad75d.netlify.app/",
					},
				],
			},
			{
				title: "Stock Tracker",
				stack: [{ name: "React" }, { name: "Chart.js" }],
				description:
					"Enter a Stock Symbol and view daily / weekly stock price changes. Created with React.js, Chart.js and Alpha Vantage API.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/stock.jpg",
					width: "1024",
					height: "576",
					alt: "Stock Tracker",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-stock-tracker",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://zen-goldberg-6bf025.netlify.app/",
					},
				],
			},
			{
				title: "Admin Panel",
				stack: [{ name: "React" }, { name: "Blueprint.js" }],
				description:
					"Simple admin panel where you can add/edit/remove products. Created with React and Blueprint.js.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/admin.png",
					width: "1024",
					height: "576",
					alt: "Admin Panel",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/react-admin-dashboard",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://flamboyant-heisenberg-ea2730.netlify.app",
					},
				],
			},
			{
				title: "Marvel Hero Search",
				stack: [{ name: "JavaScript" }, { name: "SASS" }],
				description:
					"Search for Marvel characters to see their description and the Comics they appear in. Details of the comics can also be viewed.",
				btn: {
					text: "View demo",
					href: "",
				},
				image: {
					src: "/assets/images/cards/marvel.jpg",
					width: "1024",
					height: "576",
					alt: "Marvel database",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/js-marvel-search",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://kind-perlman-776328.netlify.app/",
					},
				],
			},
			{
				title: "Todo List",
				stack: [{ name: "JavaScript" }, { name: "SASS" }],
				description:
					"A JavaScript todo app where you can add / remove items from your todo list.",
				btn: {
					text: "View demo",
					href: "/",
				},
				image: {
					src: "/assets/images/cards/todo.png",
					width: "1024",
					height: "576",
					alt: "Todo List",
				},
				icons: [
					{
						name: "Github",
						icon: <SlSocialGithub />,
						href: "https://github.com/lillae/js-todo",
					},
					{
						name: "Demo",
						icon: <GoArrowUpRight />,
						href: "https://keen-feynman-32facd.netlify.app/",
					},
				],
			},
		],
	},
	about: {
		title: "About me",
		title_2: "Tech stack",
		intro: {
			text: "Since I started to learn Frontend developement in 2020 I'm constantly working on improving my skills to broaden my knowledge in the JavaScript and React ecosystem. I have a BSc. degree in Earth Science - Geology, I like to spend my free time outdoor hiking, traveling and capturing moments through photography.",
		},
		intro_1: [
			{
				text: "Since I started to learn Frontend developement in 2020 I'm constantly working on improving my skills to broaden my knowledge in the JavaScript and React ecosystem.",
			},
			{
				text: "I highly enjoy creative processes, paying attention to details and staying up to date through continuous learning.",
			},
			{
				text: "I have a BSc. degree in Earth Science - Geology, I like to spend my free time outdoor hiking, traveling and capturing moments through photography.",
			},
		],

		experience: [
			{
				year: "March - Oct 2022",
				company: "Frontend Developer • Leanlastic",
				description: [
					{ text: "- Worked on different projects with international clients" },
					{
						text: "- My main task was to build UI's for web apps with Next.js.",
					},
					{ text: "- We used Jest and Cypress for testing" },
				],
				stack: [
					{ name: "JavaScript" },
					{ name: "Next.js" },
					{ name: "Tailwind CSS" },
					{ name: "Jest" },
					{ name: "Cypress" },
				],
			},
		],
		stack: [
			{
				name: "JavaScript",
			},
			{
				name: "React",
			},
			{
				name: "Next.js",
			},
			{
				name: "Jest",
			},
			{
				name: "Cypress",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "CSS",
			},
			{
				name: "SASS",
			},
			{
				name: "HTML",
			},

			{
				name: "Git",
			},
			{
				name: "Github",
			},
		],
		images: {
			avatar: {
				src: "/assets/images/avatar.jpg",
				width: "1152",
				height: "1152",
				alt: "Avatar",
			},
		},
	},
	stack: {
		title: "Stack",
		stack: [
			{
				name: "JavaScript",
			},
			{
				name: "React",
			},
			{
				name: "Next.js",
			},
			{
				name: "Jest",
			},
			{
				name: "Cypress",
			},
			{
				name: "Tailwind CSS",
			},
			{
				name: "CSS",
			},
			{
				name: "SASS",
			},
			{
				name: "HTML",
			},

			{
				name: "Git",
			},
			{
				name: "Github",
			},
		],
	},
	contact: {
		title: "Contact",
		text: "If you have any questions or enquiries feel free to drop me a message, I'll be happy to answer.",
		btn: {
			text: "Get in Touch",
			href: "/",
		},
	},
	footer: {
		text: "Built and designed by Lilla Varga",
	},
};
