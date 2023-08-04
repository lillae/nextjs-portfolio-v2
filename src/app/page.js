import { Hero } from "@/components/hero";
import { Latest } from "@/components/latest-projects";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { strings } from "@/strings/strings";

export default function Home() {
	return (
		<main className='w-full flex flex-col min-h-screen bg-layout lg:overflow-x-hidden'>
			<div className='snap-container lg:w-screen h-full lg:h-screen scroll-smooth lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:relative lg:z-10'>
				<Hero strings={strings.hero} />
				<Latest strings={strings.latest_projects} />
				<Projects strings={strings.projects} />
				<About strings={strings.about} />
				<Contact strings={strings.contact} />
			</div>
		</main>
	);
}
