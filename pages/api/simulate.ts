import type { NextApiRequest, NextApiResponse } from "next";
import { simulateBrentPrice } from "../../lib/simulate";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = simulateBrentPrice(req.body);
  res.status(200).json(result);
}