import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contractAddress = req.query.contractAddress as string;
  const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY as string;

  const url = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contractAddress.toLowerCase()}&apikey=${POLYGONSCAN_API_KEY}`;

  try {
    const data = await (await fetch(url)).json();
    const abi = JSON.parse(data.result);
    res.status(200).json({
      abi,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
