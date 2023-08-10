// 1. Nav Animations
export const stagger = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 0.3,
			staggerChildren: 0.05,
			when: "beforeChildren",
		},
	},
};

export const navItemAnim = {
	hidden: { scale: 0.5, opacity: 0 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: "easeIn",
		},
	},
};

export const lineAnim = {
	hidden: { width: "0%", opacity: 0 },
	show: {
		opacity: 1,
		width: "50%",
		transition: {
			duration: 0.5,
			delay: 0.5,
			ease: "easeIn",
		},
	},
};

export const logoAnim = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.7,
			ease: "easeIn",
		},
	},
};

//2.Hero animations

export const titleAnim = {
	hidden: { opacity: 0, scale: 0.95 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: "easeIn",
		},
	},
};

export const btnAnim = {
	hidden: { opacity: 0, scale: 0.9 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.4,
			ease: "easeIn",
		},
	},
};

export const mailAnim = {
	hidden: { opacity: 0, height: 0 },
	show: {
		opacity: 1,
		height: 87,
		transition: {
			duration: 0.5,
			delay: 0.5,
			ease: "easeIn",
		},
	},
};

//3. Projects & Carousel Animations
export const projectsAnim = {
	hidden: { opacity: 0, scale: 0.8 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeIn",
		},
	},
};

export const frameAnim = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.2,
			ease: "easeIn",
		},
	},
};

//4. About Animations
export const aboutAnim = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeIn",
			staggerChildren: 0.01,
			when: "beforeChildren",
		},
	},
};

export const aboutPicAnim = {
	hidden: { opacity: 0, scale: 0.8 },
	show: {
		opacity: 1,
		scale: 0.8,
		transition: {
			ease: "easeIn",
		},
	},
};

//5. Contact Animations
export const contactAnim = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			staggerChildren: 0.05,
			ease: "easeIn",
			when: "beforeChildren",
		},
	},
};

export const contactBtnAnim = {
	hidden: {
		opacity: 0,
		width: 0,
	},
	show: {
		opacity: 1,
		width: 146,
	},
};
