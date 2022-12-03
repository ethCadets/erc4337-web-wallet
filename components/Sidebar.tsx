import { UserGroupIcon } from '@heroicons/react/24/solid';
import { FiSend } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { truncateWalletAddress } from '../utils';
import { Button } from './Button';

interface IWalletCardProps {
  address: string;
  tag: string;
}

// a simple card that displays the tag, the truncated address and a dummy balance in dollars
const WalletCard: FC<IWalletCardProps> = ({ address, tag }) => {
  return (
    <div className="flex flex-col items-start justify-center p-4 space-y-2 bg-white border border-gray-300 rounded-md w-full">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-normal">{tag}</p>
        <p className="text-sm text-gray-500">
          {truncateWalletAddress(address)}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-1">
        <p className="text-lg text-gray-800 font-normal">$0.00</p>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const router = useRouter();

  const openDashboard = () => {
    router.push('/unlocked/');
  };

  const openSettings = () => {
    router.push('/unlocked/settings');
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 text-neutral-900 border-r border-neutral-200">
      <div className="flex flex-col flex-1 px-4 pt-5 pb-4 overflow-y-auto">
        <div className="flex gap-x-4 items-center mb-2 pl-2 py-1 rounded-lg hover:bg-gray-100">
          <div className="rounded-full p-2 h-max bg-gray-100">
            <UserGroupIcon className="w-6 text-gray-800" />
          </div>
          <div className="flex flex-col">
            <span className="" text-base>
              All accounts
            </span>
            <span className="text-lg">$69.69</span>
          </div>
        </div>

        {/* Send and receive buttons */}
        <div className="flex gap-x-3">
          <button className="sidebar-user-btn">
            <FiSend className="w-3" />
            Send
          </button>
          <button className="sidebar-user-btn">Receive</button>
        </div>

        {/* Wallets of the user */}
        <div className="flex flex-col flex-grow py-4 space-y-4 overflow-y-auto">
          <WalletCard
            address="0x1234567890123456789012345678901234567890"
            tag="Wallet #1"
          />
          <WalletCard
            address="0x1234567890123456789012345678901234567890"
            tag="Wallet #2"
          />
        </div>

        {/* Settings and Dashboard buttons */}
        <div className="flex flex-col gap-y-2 mb-5">
          <button
            onClick={openDashboard}
            className={`p-2 block rounded-md ${
              router.pathname === '/unlocked'
                ? 'bg-gray-200'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={openSettings}
            className={`p-2 block rounded-md ${
              router.pathname === '/unlocked/settings'
                ? 'bg-gray-200'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};
