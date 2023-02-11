// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { from, to, sentence } = req.query;

	if (from === "bahasa") {
		const response = await prisma.$queryRaw`SELECT dti.id, b.kalimat as "translate", bi.kalimat FROM "public"."Bahasa" b 
												INNER JOIN "public"."Daerah" d ON (d.id = b."idDaerah")
												INNER JOIN "public"."DaerahToIndonesia" dti ON (dti."idBahasaDaerah" = b.id)
												INNER JOIN "public"."BahasaIndonesia" bi ON (dti."idBahasaIndonesia" = bi.id)
												WHERE bi.kalimat ilike ${sentence} AND d.nama ilike ${to}`;

		res.status(200).json({
			status: "success",
			result: response,
		});
		return;
	} else if (to === "bahasa") {
		const response = await prisma.$queryRaw`SELECT dti.id, b.kalimat, bi.kalimat as "translate" FROM "public"."Bahasa" b 
												INNER JOIN "public"."Daerah" d ON (d.id = b."idDaerah")
												INNER JOIN "public"."DaerahToIndonesia" dti ON (dti."idBahasaDaerah" = b.id)
												INNER JOIN "public"."BahasaIndonesia" bi ON (dti."idBahasaIndonesia" = bi.id)
												WHERE b.kalimat ilike ${sentence} AND d.nama ilike ${from}`;
		res.status(200).json({ status: "success", result: response });
	}
}
