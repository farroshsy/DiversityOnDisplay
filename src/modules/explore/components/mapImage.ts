import madiun from "@assets/map/madiun1@2x.png";
import malang from "@assets/map/malang1@2x.png";
import surabaya from "@assets/map/surabaya1@2x.png";
import banyuwangi from "@assets/map/banyuwangi1@2x.png";
import madura from "@assets/map/madura1@2x.png";
import { StaticImageData } from "next/image";

export interface MapImage {
	daerah: string;
	image: StaticImageData;
}

export const mapImage: MapImage[] = [
	{
		daerah: "madiun",
		image: madiun,
	},
	{
		daerah: "malang",
		image: malang,
	},
	{
		daerah: "surabaya",
		image: surabaya,
	},
	{
		daerah: "banyuwangi",
		image: banyuwangi,
	},
	{
		daerah: "madura",
		image: madura,
	},
];
