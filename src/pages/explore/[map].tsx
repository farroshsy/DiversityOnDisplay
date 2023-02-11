import ExplorePageDetail from "@modules/explore/page/ExplorePageDetail";
import { Kota } from "@prisma/client";
import { prisma } from "@services/prisma";
import { GetServerSidePropsContext } from "next";

export default function ExplorePageDetailPage({ kota }: { kota: Kota[] }) {
	return <ExplorePageDetail kota={kota} />;
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const kota = await prisma.kota.findMany({
		where: {
			daerah: {
				nama: {
					mode: "insensitive",
					equals: context.params!.map?.toString(),
				},
			},
		},
	});

	return {
		props: {
			kota,
		},
	};
};
