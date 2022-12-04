import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const walletAddress = req.query.walletAddress as string;
  const COVALENT_API_KEY = process.env.COVALENT_API_KEY as string;

  const url = `https://api.covalenthq.com/v1/1/address/${walletAddress}/nft_balances_v2/?key=${COVALENT_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      res.status(200).json(data.data);
    });
}
