// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const { type, daerah } = req.query;

		const response = await prisma.$queryRaw`SELECT dti.id, b.kalimat, bi.kalimat as "translate" FROM "public"."Bahasa" b 
												INNER JOIN "public"."Daerah" d ON (d.id = b."idDaerah")
												INNER JOIN "public"."DaerahToIndonesia" dti ON (dti."idBahasaDaerah" = b.id)
												INNER JOIN "public"."BahasaIndonesia" bi ON (dti."idBahasaIndonesia" = bi.id)
												WHERE d.nama ilike ${daerah} AND b."idTipeBahasa" = ${parseInt(type!.toString())}`;
		res.status(200).json({ status: "success", result: response });
	}
}
