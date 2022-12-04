import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../contexts';
import { PlusIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export const Landing = () => {
  const { setAuthState } = useContext(GlobalContext);
  const router = useRouter();

  const onCreateClick = () => {
    setAuthState('unlocked');
    router.push('/unlocked');
  };

  const onImportClick = () => {
    router.push('/import');
  };

  return (
    <div className="relative font-inter p-4 border w-full min-h-screen flex flex-col items-center pt-24 gap-6">
      <div className='flex items-center gap-x-5'>
        <Image
          src="/logo.svg"
          alt="logo"
          width={80}
          height={40}
        />
        <p className=" font-spaceGrotesk text-4xl font-bold select-none">
          Zephyr Wallet
        </p>
      </div>
      {/* 
        <ConnectButton />
      */}
      <div className="flex flex-col items-center gap-y-10 mt-10 w-full">
        <button
          className="flex items-center justify-center hover:shadow-xl ring-2 hover:ring-4 ring-blue-500 gap-x-2 w-full sm:w-3/4 md:w-1/2 py-16 text-center rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-100"
          onClick={onCreateClick}
        >
          <p className="font-medium text-2xl">Create wallet</p>
          <PlusIcon className="w-5" />
        </button>
        <button
          onClick={onImportClick}
          className="flex items-center justify-center hover:shadow-xl ring-1 hover:ring-2 ring-gray-500 gap-x-2 w-full sm:w-3/4 md:w-1/2 py-16 text-center rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-100"
        >
          <p className="font-medium text-2xl">Import wallet</p>
          <ArrowDownIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};
