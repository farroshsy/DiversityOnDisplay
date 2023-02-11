export interface Daerah {
	idDaerah: number;
	namaDaerah: string;
	letakPeta: LetakPeta[];
	bahasa: Bahasa[];
	toHasilTranslate: HasilTranslateToDaerah[];
}

export interface LetakPeta {
	idPeta: number;
	titikX: number;
	titikY: number;
	warna?: string;
	idDaerah: number;
	daerah: Daerah;
}

export interface Bahasa {
	idBahasa: number;
	kalimat: string;
	voiceOver?: BinaryData;
	HasilTranslate: HasilTranslate[];
	idDaerah: number;
	daerah: Daerah;
}

export interface HasilTranslateToDaerah {
	id: number;
	idDaerah: number;
	daerah: Daerah;
	idHasilTranslate: number;
	hasilTranslate: HasilTranslate;
}

export interface HasilTranslate {
	idTranslate: number;
	hasilTranslate: string;
	toDaerah: HasilTranslateToDaerah[];
	idBahasa: number;
	bahasa: Bahasa;
}
