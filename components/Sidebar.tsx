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
    <div className="flex flex-col items-center justify-center p-4 space-y-2 bg-white rounded shadow">
      <div className="flex flex-col items-center justify-center space-y-1">
        <h1 className="text-lg font-bold">{tag}</h1>
        <p className="text-sm text-gray-600">
          {truncateWalletAddress(address)}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-1">
        <p className="text-sm text-gray-600">$0.00</p>
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
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div>
          <span className="block">All accounts</span>
          <span className="block">$69.69</span>
        </div>

        <div className="flex">
          <Button>Send</Button>
          <Button>Receive</Button>
        </div>

        <hr />

        <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
          <WalletCard
            address="0x1234567890123456789012345678901234567890"
            tag="My Wallet"
          />
          <WalletCard
            address="0x1234567890123456789012345678901234567890"
            tag="My Wallet"
          />
        </div>

        {/* a settings button at the bottom */}
        <Button
          onClick={openDashboard}
          variant="secondary"
          className="mt-auto mb-0"
        >
          Dashboard
        </Button>
        <Button onClick={openSettings} variant="secondary" className="mt-4">
          Settings
        </Button>
      </div>
    </div>
  );
};
