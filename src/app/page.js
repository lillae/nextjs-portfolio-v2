import { Hero } from "@/components/hero";
//import { Latest } from "@/components/latest-projects";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { strings } from "@/strings/strings";

export default function Home() {
	return (
		<main className='w-full flex flex-col min-h-screen bg-layout 1xl:overflow-x-hidden'>
			<div className='snap-container 1xl:w-screen h-full 1xl:h-screen scroll-smooth 1xl:snap-y 1xl:snap-mandatory 1xl:overflow-y-scroll 1xl:relative 1xl:z-10'>
				<Hero strings={strings.hero} />
				{/* <Latest strings={strings.latest_projects} /> */}
				<Projects strings={strings.projects} />
				<About strings={strings.about} />
				<Contact strings={strings.contact} />
			</div>
		</main>
	);
}
