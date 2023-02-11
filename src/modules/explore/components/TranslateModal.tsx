import { useState } from "react";
import { GiSpeaker } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { DefaultTextState } from "./ModalPopup";

interface TranslateModalProps {
	openTransModal: boolean;
	setOpenTransModal: (input: boolean) => void;
	defaultText: DefaultTextState | undefined;
}

const TranslateModal = ({ openTransModal, setOpenTransModal, defaultText }: TranslateModalProps) => {
	const [inputText, setInputText] = useState<string>(defaultText ? defaultText.sentence : "");
	const [inputRegionFrom, setInputRegionFrom] = useState<string>("BAHASA");
	const [inputRegionTo, setInputRegionTo] = useState<string>("BAHASA");
	const [translatedText, setTranslatedText] = useState<string>(defaultText ? defaultText.sentence : "");
	const [isLoading, setIsLoading] = useState(false);
	const translate = async () => {
		setIsLoading(true);
		if (inputRegionFrom === "BAHASA" || inputRegionTo === "BAHASA") {
			const response = await fetch(`/api/translate/indonesia?from=${inputRegionFrom?.toLowerCase()}&to=${inputRegionTo?.toLowerCase()}&sentence=${inputText}`, {
				method: "GET",
			});
			const res = await response.json();
			if (res.result.length === 0) {
				setTranslatedText("Tidak bisa menerjemahkan");
			} else {
				setTranslatedText(res.result[0].translate);
			}
		} else {
			const response = await fetch(`/api/translate/daerah?from=${inputRegionFrom?.toLowerCase()}&to=${inputRegionTo?.toLowerCase()}&sentence=${inputText}`, {
				method: "GET",
			});
			const res = await response.json();
			if (res.translate.length === 0) {
				setTranslatedText("Tidak bisa menerjemahkan");
			} else {
				setTranslatedText(res.translate[0].translate);
			}
		}
		setIsLoading(false);
	};
	return (
		<>
			{openTransModal && (
				<div className="bg-gray-1000 bg-opacity-60 z-50 fixed top-0 right-0 left-0 p-10 text-white-200 flex flex-col items-center justify-center overflow-hidden w-full h-full">
					<div className="bg-gray-900 z-30 flex flex-col w-[50%] p-10 font-bold text-lg rounded-xl">
						<div className="flex justify-end">
							<div className="cursor-pointer bg-gray-800 p-2 rounded-lg" onClick={() => setOpenTransModal(false)}>
								<IoCloseOutline />
							</div>
						</div>
						<div className="py-4" />
						<textarea name="sentenceInput" id="sentenceInput" rows={4} value={inputText} onChange={(e) => setInputText(e.target.value)} className="form-textarea rounded-lg bg-gray-500"></textarea>
						<div className="flex justify-between items-center mt-2">
							<div className="text-sm font-normal flex items-center gap-2 hover:cursor-pointer">
								<p>Audio</p>
								<GiSpeaker size={20} />
							</div>
							<div className="text-sm">
								<select
									className="form-select py-0 text-sm bg-gray-900 border-none"
									value={inputRegionFrom}
									onChange={(e) => {
										setInputRegionFrom(e.target.value);
										console.log(inputRegionFrom);
									}}
									name="bahasaFrom"
								>
									<option disabled>Pilih Bahasa</option>
									<option value="BAHASA">Bahasa Indonesia</option>
									<option value="MADURA">Jawa Timur - Madura</option>
									<option value="SURABAYA">Jawa Timur - Surabaya</option>
									<option value="BANYUWANGI">Jawa Timur - Banyuwangi</option>
									<option value="MADIUN">Jawa Timur - Madiun</option>
									<option value="MALANG">Jawa Timur - Malang</option>
								</select>
							</div>
						</div>
						<button className="bg-gray-400 text-base rounded-md py-2 my-4" disabled={isLoading} onClick={() => inputText && translate()}>
							{isLoading ? "Translating..." : "Translate"}
						</button>
						<textarea name="sentenceInput" id="sentenceInput" disabled value={translatedText} rows={4} className="form-textarea rounded-lg bg-gray-500"></textarea>
						<div className="flex justify-between items-center mt-2 mb-4">
							<div className="text-sm font-normal flex items-center gap-2 hover:cursor-pointer">
								<p>Audio</p>
								<GiSpeaker size={20} />
							</div>
							<div className="text-sm">
								<select
									className="form-select py-0 text-sm bg-gray-900 border-none"
									name="bahasaTo"
									value={inputRegionTo}
									onChange={(e) => {
										setInputRegionTo(e.target.value);
										console.log(inputRegionTo);
									}}
								>
									<option disabled value="">
										Pilih Bahasa
									</option>
									<option value="BAHASA">Bahasa Indonesia</option>
									<option value="MADURA">Jawa Timur - Madura</option>
									<option value="SURABAYA">Jawa Timur - Surabaya</option>
									<option value="BANYUWANGI">Jawa Timur - Banyuwangi</option>
									<option value="MADIUN">Jawa Timur - Madiun</option>
									<option value="MALANG">Jawa Timur - Malang</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TranslateModal;
