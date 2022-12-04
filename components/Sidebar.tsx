import { UserGroupIcon } from '@heroicons/react/24/solid';
import { FiSend } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { truncateWalletAddress } from '../utils';
import { Button } from './Button';
import { useBalance, useProvider, useSigner } from 'wagmi';
import Modal from 'react-modal';
import { Input } from './Input';
import {
  wrapProvider,
  ClientConfig,
  SimpleAccountAPI,
} from '@account-abstraction/sdk';
import {
  BUNDLER_URL,
  ENTRYPOINT_ADDRESS,
  WALLET_CONTRACT_ADDRESS,
} from '../constants';
import { JsonRpcProvider } from '@ethersproject/providers';
import { ethers, Signer } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface IWalletCardProps {
  address: string;
  tag: string;
}

// a simple card that displays the tag, the truncated address and a dummy balance in dollars
const WalletCard: FC<IWalletCardProps> = ({ address, tag }) => {
  const { data: balance } = useBalance({
    // @ts-expect-error
    address,
  });

  return (
    <div className="flex flex-col items-start justify-center p-4 space-y-2 bg-white border border-gray-300 rounded-md w-full">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-normal">{tag}</p>
        <p className="text-sm text-gray-500">
          {truncateWalletAddress(address)}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-1">
        <p className="text-lg text-gray-800 font-normal">
          {balance?.formatted} {balance?.symbol}
        </p>
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

  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [sendToWalletAddress, setSendToWalletAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');

  const [receiveModalOpen, setReceiveModalOpen] = useState(false);

  const { data: signer } = useSigner();
  const provider = signer?.provider as JsonRpcProvider;

  const sdkConfig: ClientConfig = {
    entryPointAddress: ENTRYPOINT_ADDRESS,
    bundlerUrl: BUNDLER_URL,
  };

  const openModal = () => {
    setSendModalOpen(true);
  };

  const sendMoney = async () => {
    // const aaProvider = await wrapProvider(
    //   provider as JsonRpcProvider,
    //   sdkConfig
    // );
    // const aaSigner = aaProvider.getSigner();

    // console.log(ethers.utils.parseEther(sendAmount));

    // const tx = await aaSigner.sendTransaction({
    //   to: sendToWalletAddress,
    //   value: ethers.utils.parseEther(sendAmount),
    //   gasLimit: 15_000_000,
    // });
    // const res = await tx.wait();
    // console.log(res);
    const owner = signer as Signer;
    const walletAPI = new SimpleAccountAPI({
      provider,
      entryPointAddress: ENTRYPOINT_ADDRESS,
      owner,
      factoryAddress: '0x923F3250C2c3c29b13921C1665a83Ac835514c65',
    });
    const op = await walletAPI.createSignedUserOp({
      target: sendToWalletAddress,
      value: ethers.utils.parseEther(sendAmount),
      data: '0x',
      gasLimit: '15000000',
    });
    console.log(op);
  };

  return (
    <>
      <Modal
        isOpen={sendModalOpen}
        onRequestClose={() => setSendModalOpen(false)}
      >
        <h3 className="text-2xl font-bold">Send</h3>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="send-to-address">Send to address</label>
            <Input
              id="send-to-address"
              type="text"
              value={sendToWalletAddress}
              onChange={(e) => setSendToWalletAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="send-amount">Amount</label>
            <Input
              id="send-amount"
              type="text"
              placeholder="Enter amount in MATIC"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
            />
          </div>

          <Button variant="primary" onClick={sendMoney}>
            Send
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={receiveModalOpen}
        onRequestClose={() => setReceiveModalOpen(false)}
      >
        <h3 className="text-2xl font-bold">Receive</h3>

        <img src="https://raw.githubusercontent.com/remiroyc/react-ethereum/master/images/qrcode-sample.png" />
      </Modal>

      <div className="flex flex-col flex-1 min-h-0 text-neutral-900 border-r border-neutral-200">
        <ConnectButton />

        <div className="flex flex-col flex-1 px-4 pt-5 pb-4 overflow-y-auto">
          <div className="flex gap-x-4 items-center mb-2 pl-2 py-1 rounded-lg hover:bg-gray-100">
            <div className="rounded-full p-2 h-max bg-gray-100">
              <UserGroupIcon className="w-6 text-gray-800" />
            </div>
            <div className="flex flex-col">
              <span className="text-base text-gray-600">All accounts</span>
              <span className="text-lg">$69.69</span>
            </div>
          </div>

          {/* Send and receive buttons */}
          <div className="flex gap-x-3">
            <button className="sidebar-user-btn" onClick={openModal}>
              <FiSend className="w-3" />
              Send
            </button>
            <button
              className="sidebar-user-btn"
              onClick={() => setReceiveModalOpen(true)}
            >
              Receive
            </button>
          </div>

          {/* Wallets of the user */}
          <div className="flex flex-col flex-grow py-4 space-y-4 overflow-y-auto">
            <WalletCard address={WALLET_CONTRACT_ADDRESS} tag="Wallet #1" />
            {/* <WalletCard
            address="0xa57feF21143e00632782284bDBF6Aa7da52A6F74"
            tag="Wallet #2"
          /> */}
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
    </>
  );
};
