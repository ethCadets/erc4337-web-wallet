import { NextPage } from 'next';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { useSignMessage } from 'wagmi';


import BackButton from '../../../components/BackButton';

const Page: NextPage = () => {


  const [walletAddresses, setWalletAddresses] = useState<string[]>([]);
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Adding Guardians to the ERC4337 Wallet',
  })

  const onSubmit = async () => {
    signMessage()
    toast.success('Guardian addresses updated', {
      position: 'bottom-center',
    });
  };

  return (
    <Layout>
      <Toaster />
      <div className="p-8">
        <BackButton />
        <h1 className="text-2xl mt-5 font-bold">Guardians</h1>
        <h4 className="text-slate-700">
          Setup social recovery for your wallet
        </h4>

        <div className="flex flex-col space-y-4 mt-6 max-w-lg">
          <div className="flex flex-col space-y-2">
            <label className="text-slate-700">Guardian 1</label>
            <input
              className="border border-slate-300 rounded-md p-2"
              value={walletAddresses[0]}
              onChange={(e) => {
                const newWalletAddresses = [...walletAddresses];
                newWalletAddresses[0] = e.target.value;
                setWalletAddresses(newWalletAddresses);
              }}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-slate-700">Guardian 2</label>
            <input
              className="border border-slate-300 rounded-md p-2"
              value={walletAddresses[1]}
              onChange={(e) => {
                const newWalletAddresses = [...walletAddresses];
                newWalletAddresses[1] = e.target.value;
                setWalletAddresses(newWalletAddresses);
              }}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-slate-700">Guardian 3</label>
            <input
              className="border border-slate-300 rounded-md p-2"
              value={walletAddresses[2]}
              onChange={(e) => {
                const newWalletAddresses = [...walletAddresses];
                newWalletAddresses[2] = e.target.value;
                setWalletAddresses(newWalletAddresses);
              }}
            />
          </div>
        </div>

        <Button onClick={onSubmit} variant="primary" className="mt-6">
          Add Guardians
        </Button>
      </div>
    </Layout>
  );
};

export default Page;
