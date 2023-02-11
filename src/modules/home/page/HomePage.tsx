import Image from "next/image";
import image1 from "@assets/image/rectangle-155@2x.png";
import image2 from "@assets/image/rectangle-165@2x.png";
import image3 from "@assets/image/rectangle-175@2x.png";
import image4 from "@assets/image/rectangle-18@2x.png";
import { useCallback } from "react";
import Link from "next/link";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function HomePage() {
	const onScrollContainerClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='textJumbotronContainer']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);
	return (
		<div className="flex flex-col gap-16 text-2xl">
			<div className="text-center text-3xl">
				<div className="flex items-center justify-center">
					<b>The</b>
					<b className="text-5xl text-gray-300">BEST</b>
					<b>Jawa Timur dictionary to help you!</b>
				</div>
				<div className="flex justify-center gap-7 my-8">
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image1} />
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image2} />
					<Image className="rounded-2xl object-cover" width={348} height={234} alt="" src={image3} />
				</div>
			</div>
			<div className="mx-auto text-base">
				<div className="font-medium">Scroll to have fun!</div>
				<RxDoubleArrowDown className="mx-auto" size={48} />
			</div>
			<div className="flex items-center justify-center gap-2 text-3xl">
				<b>What’s Inside of</b>
				<b className="text-5xl text-gray-300">JamJiwa</b>
				<b>?</b>
			</div>

			<div className="flex justify-center gap-5 ">
				<Image width={450} className="rounded-2xl" alt="" src={image4} />
				<div className="w-1/2">
					<p className="font-bold text-3xl">Find Common Words!</p>
					<div className="text-xl space-y-4 mt-3">
						<p>When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there.</p>
						<p>Moreover, a different accent from what you have will be more difficult to understand.</p>
						<p>
							<span className="font-bold">JamJiwa</span> will be the answer to your problem!
						</p>
					</div>
				</div>
			</div>

			<button className="rounded-xl bg-gray-400 px-5 w-fit py-3 mx-auto text-base font-bold">
				<Link href="/explore">Explore Now</Link>
			</button>
		</div>
	);
}
