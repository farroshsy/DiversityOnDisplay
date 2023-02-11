import { useRouter } from "next/router";
import { useState } from "react";
import TranslateModal from "./TranslateModal";
import { BsSoundwave } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LoadingSpinner from "@components/LoadingSpinner";

const modalElements = [
	{ id: 1, name: "Greetings" },
	{ id: 2, name: "Daily Conversations" },
	{ id: 3, name: "Thank You" },
	{ id: 4, name: "Asking For Helps" },
	{ id: 5, name: "Common Phrase and Vocabulary" },
];

interface ModalPopupProps {
	openModal: boolean;
	setOpenModal: (arg0: boolean) => void;
}

interface Sentence {
	id: string;
	kalimat: string;
	translate: string;
}

export interface DefaultTextState {
	sentence: string;
	translate: string;
}
const ModalPopup = ({ openModal, setOpenModal }: ModalPopupProps) => {
	const router = useRouter();
	const { map } = router.query;
	const [openDropDown, setOpenDropDown] = useState<number | null>();
	const [openTransModal, setOpenTransModal] = useState<boolean>(false);
	const [sentences, setSentences] = useState<Sentence[]>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [defaultText, setDefaultText] = useState<DefaultTextState>();
	const handleDropDown = (dId: number) => {
		if (openDropDown === dId) {
			setOpenDropDown(null);
		} else {
			fetchSentences(dId);
			setOpenDropDown(dId);
		}
	};

	const handleModal = (sen: string, trans: string) => {
		setDefaultText({ sentence: sen, translate: trans });
		setOpenTransModal(true);
	};

	const fetchSentences = async (type: number) => {
		setIsLoading(true);
		const response = await fetch(`/api/kalimat?type=${type}&daerah=${map}`, {
			method: "GET",
		});

		const res = await response.json();
		console.log(res);
		setSentences(res.result);
		setIsLoading(false);
	};

	return (
		<>
			{openModal && (
				<div className="bg-gray-1000 bg-opacity-60 z-10 fixed top-0 right-0 left-0 p-10 text-white-200 flex flex-col items-center justify-center overflow-hidden gap-6 w-screen h-full">
					<div className="relative bg-gray-900 z-20 flex flex-col gap-6 w-[70%] p-10 font-bold text-lg">
						{modalElements.map((item) => (
							<div key={item.id} className=" bg-gray-700 rounded-lg overflow-hidden cursor-pointer" onClick={() => handleDropDown(item.id)}>
								<div className="px-5 py-2">
									<div className="flex justify-between items-center">
										<p>{item.name}</p>
										<div>
											<MdOutlineKeyboardArrowDown />
										</div>
									</div>
								</div>
								{openDropDown === item.id &&
									(isLoading ? (
										<LoadingSpinner />
									) : (
										<div className="px-5 py-2 bg-gray-500 text-base space-y-3">
											{sentences?.length !== 0 ? (
												sentences?.map((item) => (
													<div key={item.id} className="flex justify-between items-center">
														<div className="flex w-[40%] justify-between">
															<p>{item.kalimat}</p>
															<p className="italic">{item.translate}</p>
														</div>
														<div onClick={() => handleModal(item.kalimat, item.translate)}>
															<BsSoundwave size={25} />
														</div>
													</div>
												))
											) : (
												<div className="text-center">Tidak ada data</div>
											)}
										</div>
									))}
							</div>
						))}
					</div>
					<div className="px-5 py-2 bg-gray-600 cursor-pointer w-fit rounded-2xl text-sm" onClick={() => setOpenModal(false)}>
						Close
					</div>
					<TranslateModal openTransModal={openTransModal} setOpenTransModal={setOpenTransModal} defaultText={defaultText} />
				</div>
			)}
		</>
	);
};

export default ModalPopup;
