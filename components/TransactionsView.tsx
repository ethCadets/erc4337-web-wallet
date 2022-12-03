import { useEffect } from 'react';

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
  useEffect(() => {
    fetchTransactions(walletAddress).then(console.log);
  }, [walletAddress]);

  return (
    <div>
      <h1>Transactions</h1>
      {/* Render transactions here */}
    </div>
  );
};
