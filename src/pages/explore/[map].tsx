import ExplorePageDetail from "@modules/explore/page/[id]_Project";
import { Kota } from "@prisma/client";
import { prisma } from "@services/prisma";
import { GetServerSidePropsContext } from "next";

export default function ExplorePageDetailPage({ kota }: { kota: Kota[] }) {
	return <ExplorePageDetail/>;
}

