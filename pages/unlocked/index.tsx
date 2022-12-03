import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { TokensView } from '../../components/TokensView';

type TabState = 'tokens' | 'transactions' | 'nfts';

const Page: NextPage = () => {
  const [activeTab, setActiveTab] = useState<TabState>('tokens');

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-4xl font-bold">ERC4337 web wallet</h1>

        <div className="flex flex-col">
          <span className="block">Total portfolio value</span>
          <span className="text-3xl font-bold">$69.69</span>
        </div>

        <hr />

        {/* three tabs navigation */}
        <div className="flex flex-row space-x-4">
          <button
            className={`${
              activeTab === 'tokens' ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('tokens')}
          >
            Tokens
          </button>
          <button
            className={`${
              activeTab === 'transactions' ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('transactions')}
          >
            Transactions
          </button>
          <button
            className={`${
              activeTab === 'nfts' ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('nfts')}
          >
            NFTs
          </button>
        </div>

        {/* the content of the active tab */}
        {activeTab === 'tokens' && (
          <div>
            <TokensView walletAddress="dhaiwat.eth" />
          </div>
        )}
        {activeTab === 'transactions' && <div>Transactions</div>}
        {activeTab === 'nfts' && <div>NFTs</div>}
      </div>
    </Layout>
  );
};

export default Page;
