import { useEffect, useState } from 'react';

const fetchTransactions = async (walletAddress: string) => {
  // fetch txs from /api/transactions
  const response = await fetch(
    `/api/transactions?walletAddress=${walletAddress}`
  );
  const transactions = await response.json();
  return transactions;
};

interface ITransactionsViewProps {
  walletAddress: string;
}

export const TransactionsView: React.FC<ITransactionsViewProps> = ({
  walletAddress,
}) => {
  const [transactions, setTransactions] = useState<any>();

  useEffect(() => {
    fetchTransactions(walletAddress).then(setTransactions);
  }, [walletAddress]);

  return (
    <div>
      <p className='text-lg font-semibold'>Address:</p>
      <p>{!transactions ? "Loading..." : transactions.address}</p>
    </div>
  );
};
