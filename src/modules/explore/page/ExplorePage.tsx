/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

export default function ExplorePage() {
	const router = useRouter();
	return (
		<div className="bg-gray-900 w-full flex flex-col items-center gap-7 text-gray-200 font-inter">
			<div className="flex flex-col items-center gap-7 text-center text-3xl">
				<div className="flex flex-row items-center">
					<b>Where</b>
					<b className="text-5xl text-gray-300">LOCATION</b>
					<b>Are You Now?</b>
				</div>
				<div className="relative w-[1418.25px] h-[770.25px] text-xl">
					<div className="absolute top-[238.55px] left-[411.83px] w-[515.08px] h-[395.21px] cursor-pointer" onClick={() => router.push("/explore/malang")}>
						<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/malang@2x.png" />
					</div>
					<div className="absolute top-[150.73px] left-[0px] w-[492.53px] h-[456.93px]">
						<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/madiun@2x.png" onClick={() => router.push("/explore/madiun")} />
					</div>
					<div className="absolute top-[0px] left-[268.22px] w-[522.2px] h-[327.56px] cursor-pointer" onClick={() => router.push("/explore/surabaya")}>
						<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/surabaya@2x.png" />
					</div>
					<div className="absolute top-[280.09px] left-[738.2px] w-[680.05px] h-[490.16px] cursor-pointer" onClick={() => router.push("/explore/banyuwangi")}>
						<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/banyuwangi@2x.png" />
					</div>
					<div className="absolute top-[7.12px] left-[694.29px] w-[723.96px] h-[231.43px] cursor-pointer" onClick={() => router.push("/explore/madura")}>
						<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/madura@2x.png" />
					</div>
					<div className="absolute top-[128.18px] left-[1000.49px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
						<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
							<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
								<b className="self-stretch relative leading-[120%] inline-block">Tips! #1</b>
								<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Hover on your desired location!</div>
							</div>
						</div>
					</div>
					<div className="absolute top-[521.01px] left-[75.96px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
						<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
							<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
								<b className="self-stretch relative leading-[120%] inline-block">Tips! #2</b>
								<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Is it what you want? Click it!</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
