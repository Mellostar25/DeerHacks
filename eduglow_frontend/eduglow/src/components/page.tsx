import TypingAnimation from "@/components/TypingAnimation";
import Link from "next/link";

function LinkButton(props: React.PropsWithChildren<{ href: string }>) {
	return (
		<Link href={props.href}>
			<div className='rounded-lg bg-[#f3f4f6] py-2 px-4'>
				{props.children}
			</div>
		</Link>
	);
}

export default function Home() {
	
	return (
		<div className="flex-1 flex flex-col">
			<div className='flex-1'></div>
			<div className='mx-auto text-center '>
				{/* Typing animation here */}
				<div className='text-8xl font-bold text-white p-5'>
					<TypingAnimation
						data={[
							"Chile",
							"Spain",
							"France",
							"Phillipines",
							"Singapore",
							"Turkey",
							"Mexico",
							"Bolivia",
							"Venesuala",
							"Somalia",
							"Ethiopia",
							"Egypt",
							"Madagascar",
						]}
					/>
					
					
				</div>
				<div className='text-8xl font-bold text-white p-5 animate-pulse'>
					<b>needs OUR HELP.</b></div>
				
				<div className='flex flex-row text-black'>
					<div className="flex-1"/>
					<div className='px-2 text-black'>
						<LinkButton href='/about' >Learn More</LinkButton>
					</div>
					<div className='px-2'>
						<LinkButton href='/tool'>Use Tool</LinkButton>
					</div>
					<div className="flex-1"/>
				</div>
			</div>
			<div className='flex-1'></div>
		</div>
	);
}



