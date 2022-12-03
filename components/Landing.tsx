import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../contexts';
import { Button } from './Button';
import { PlusIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export const Landing = () => {
  const { setAuthState } = useContext(GlobalContext);
  const router = useRouter();

  const onCreateClick = () => {
    setAuthState('unlocked');
    router.push('/unlocked');
  };

  return (
    <div className="p-4 w-full min-h-screen flex flex-col items-center mt-24 gap-6">
      <p className="text-3xl font-bold font-mono px-3 py-1 bg-slate-100 rounded-md">Infinity Wallet</p>
      {/* 
        <ConnectButton />
      */}
      <div className="flex flex-col items-center gap-y-10 mt-10 w-full">
        <button className="flex items-center justify-center gap-x-2 w-full sm:w-3/4 md:w-1/2 py-16 text-center border border-black rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-100">
          <p className="font-medium text-2xl">Create wallet</p>
          <PlusIcon className="w-5" />
        </button>
        <button className="flex items-center justify-center gap-x-2 w-full sm:w-3/4 md:w-1/2 py-16 text-center border border-black rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-100">
          <p className="font-medium text-2xl">Import wallet</p>
          <ArrowDownIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};
