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

const TransactionCard = ({ txn }: any) => {
  return (
    <div className="rounded-lg p-4 max-w-xl bg-gray-100">
      <p>
        <span className="text-gray-600 font-semibold">From address:</span>{' '}
        {txn.from_address}
      </p>
      <p>
        <span className="text-gray-600 font-semibold">To address:</span>{' '}
        {txn.to_address}
      </p>
    </div>
  );
};

export const TransactionsView: React.FC<ITransactionsViewProps> = ({
  walletAddress,
}) => {
  const [transactions, setTransactions] = useState<any>();
  console.log(transactions);

  useEffect(() => {
    fetchTransactions(walletAddress).then(setTransactions);
  }, [walletAddress]);

  return (
    <div className="px-5">
      <p className="text-3xl font-semibold mb-5">Transactions History</p>
      <div className="flex flex-col gap-y-3">
        {!transactions ? (
          <p>Loading...</p>
        ) : (
          transactions.items.map((txn: any) => <TransactionCard txn={txn} />)
        )}
      </div>
    </div>
  );
};
