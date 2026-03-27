import { simulateBrentPrice } from "@/lib/simulate";

export async function POST(req: Request) {
  const body = await req.json();
  const result = simulateBrentPrice(body);

  return Response.json(result);
}