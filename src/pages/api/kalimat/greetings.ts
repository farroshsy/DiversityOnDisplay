// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";
import { equal } from "assert";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const { daerah } = req.query;
		const greetings = await prisma.bahasa.findMany({
			select: {
				kalimat: true,
			},
			where: {
				idTipeBahasa: 1,
				daerah: {
					nama: {
						mode: "insensitive",
						equals: daerah?.toString(),
					},
				},
			},
		});
		if (greetings) {
			res.status(200).json({
				status: "success",
				result: greetings,
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
