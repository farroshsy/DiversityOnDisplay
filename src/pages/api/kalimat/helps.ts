// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const { daerah } = req.query;
		const helps = await prisma.bahasa.findMany({
			select: {
				kalimat: true,
			},
			where: {
				idTipeBahasa: 3,
				daerah: {
					nama: {
						mode: "insensitive",
						equals: daerah?.toString(),
					},
				},
			},
		});
		if (helps) {
			res.status(200).json({
				status: "success",
				result: helps,
			});
			return;
		}
		res.status(404).json({
			status: "error",
			result: "Not Found",
		});
		return;
	}
	res.status(403).json({
		status: "error",
		result: "Method not allowed",
	});
}
