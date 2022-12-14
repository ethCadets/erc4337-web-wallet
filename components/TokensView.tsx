import { ethers } from 'ethers';
import { FC, useEffect, useState } from 'react';

const fetchTokenBalances = async (walletAddress: string) => {
  const res = await fetch('/api/token-balance?walletAddress=' + walletAddress);
  const data = await res.json();
  return data.items;
};

interface ITokensView {
  walletAddress: string;
}

interface IBalance {
  balance: string;
  contract_ticker_symbol: string;
  contract_address: string;
  logo_url: string;
  contract_decimals: number;
}

export const TokensView: FC<ITokensView> = ({ walletAddress }) => {
  const [balances, setBalances] = useState<IBalance[]>([]);

  useEffect(() => {
    fetchTokenBalances(walletAddress).then(setBalances);
  }, [walletAddress]);

  return (
    <>
      <p className="text-2xl font-semibold">{walletAddress}</p>
      <div className="flex flex-col gap-y-4 mt-5 w-full">
        {balances.length > 0
          ? balances.map((balance) => (
              <div
                key={balance.contract_address}
                className="flex items-center p-4 border border-gray-200 rounded-md"
              >
                <img
                  src={balance.logo_url}
                  alt={balance.contract_ticker_symbol.slice(0, 4)}
                  className="w-9 rounded-full"
                />
                <p className="text-lg text-gray-800 ml-4">
                  {parseFloat(
                    ethers.utils
                      .formatUnits(balance.balance, balance.contract_decimals)
                      .toString()
                  ).toFixed(2)}
                </p>
                <p className="text-lg text-gray-600 ml-2">
                  {balance.contract_ticker_symbol}
                </p>
              </div>
            ))
          : 'Loading tokens...'}
      </div>
    </>
  );
};
