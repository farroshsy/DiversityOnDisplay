// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@services/prisma";
import { Daerah } from "@interfaces/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Daerah[] | {}>) {
	const data = await prisma.daerah.findMany();
	if (data.length !== 0) {
		res.status(200).json(data);
	}
	res.status(400).json({ message: "No users found" });
}
