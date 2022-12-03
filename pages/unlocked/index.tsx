import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { NFTsView } from '../../components/NFTsView';
import { TokensView } from '../../components/TokensView';
import { TransactionsView } from '../../components/TransactionsView';

type TabState = 'tokens' | 'transactions' | 'nfts';

const Page: NextPage = () => {
  const [activeTab, setActiveTab] = useState<TabState>('tokens');
  const totalValue = 69.693425;

  return (
    <Layout>
      <div className="flex flex-col gap-y-8 p-4 bg-gray-100 min-h-screen">
        {/* User and Network details */}
        <div className="w-full flex flex-row gap-x-5">
          <p className=" text-[32px] font-semibold">Portfolio</p>
        </div>
        <div className="flex flex-col gap-y-1 max-w-fit py-4 pl-4 pr-6 rounded-2xl border border-gray-200 bg-white">
          <span className="text-gray-600 font-normal">
            Total portfolio value
          </span>
          <span className="text-4xl font-semibold">
            ${totalValue.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col gap-y-8 p-4 rounded-3xl bg-white border border-gray-200">
          {/* three tabs navigation */}
          <div className="flex flex-row space-x-4">
            <button
              className={`${
                activeTab === 'tokens'
                  ? 'active-tab-portfolio'
                  : 'inactive-tab-portfolio'
              }`}
              onClick={() => setActiveTab('tokens')}
            >
              Tokens
            </button>
            <button
              className={`${
                activeTab === 'transactions'
                  ? 'active-tab-portfolio'
                  : 'inactive-tab-portfolio'
              }`}
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
            </button>
            <button
              className={`${
                activeTab === 'nfts'
                  ? 'active-tab-portfolio'
                  : 'inactive-tab-portfolio'
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

          {activeTab === 'transactions' && (
            <div>
              <TransactionsView walletAddress="dhaiwat.eth" />
            </div>
          )}
          {activeTab === 'nfts' && (
            <div>
              <NFTsView walletAddress="dhaiwat.eth" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
