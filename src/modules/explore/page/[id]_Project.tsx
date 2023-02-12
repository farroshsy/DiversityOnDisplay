import Image from "next/image";
import { useState } from "react";
import image1 from "@assets/image/rectangle-15@2x.png";
import image2 from "@assets/image/rectangle-16@2x.png";
import image3 from "@assets/image/rectangle-17@2x.png";
import { RxDoubleArrowDown } from "react-icons/rx";
import ModalPopup from "../components/ModalPopup";
import { useRouter } from "next/router";
import { Kota } from "@prisma/client";
import { mapImage } from "../components/mapImage";

export default function ExplorePageDetail({ kota }: { kota: Kota[] }) {
	const [openModal, setOpenModal] = useState(false);
	const router = useRouter();
	const { map } = router.query;
	const imageMap = mapImage.find((item) => item.daerah === map?.toString().toLowerCase());
	return (
		<>
			<div className="bg-gray-900 flex flex-col text-3xl">
				<div className="mx-auto">
					<div className="flex items-center justify-center">
						<b>The</b>
						<b className="text-5xl text-gray-300">BEST</b>
						<b>Jawa Timur dictionary to help you!</b>
					</div>
				</div>
				<div className="flex flex-row justify-center gap-4 my-8">
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image1} />
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image2} />
					<Image width={348} height={234} className="rounded-2xl object-cover" alt="" src={image3} />
				</div>
				<div className="flex flex-row items-center justify-center gap-6">
					<b>Welcome to</b>
					<b className="text-5xl text-gray-300">{map?.toString().toUpperCase()}</b>
				</div>
				<div className="mx-auto">
					<Image width={700} className="object-contain" alt="" src={imageMap!.image} />
				</div>
				<div className="flex gap-4 mx-auto w-[60%] flex-wrap justify-center">
					{kota.map((item, index) => (
						<div className="px-5 py-4 font-bold text-base bg-gray-800 rounded-lg" key={index}>
							{item.nama}
						</div>
					))}
				</div>
				<div className="py-5" />
				<div className="my-6 flex flex-col items-center cursor-pointer text-base text-gray-1500" onClick={() => setOpenModal(true)}>
					<p>Scroll to have fun!</p>
					<RxDoubleArrowDown size={48} />
				</div>
			</div>
			<ModalPopup openModal={openModal} setOpenModal={setOpenModal} />
		</>
	);
}
