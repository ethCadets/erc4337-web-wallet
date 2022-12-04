import { NextPage } from 'next';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Layout } from '../../../components/Layout';
import toast, { Toaster } from 'react-hot-toast';

const Page: NextPage = () => {
  const [walletAddresses, setWalletAddresses] = useState<string[]>([]);

  const onSubmit = async () => {
    toast.success('Guardian addresses updated', {
      position: 'bottom-center',
    });
  };

  return (
    <Layout>
      <Toaster />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Guardians</h1>
        <h4 className="text-slate-700">
          Setup social recovery for your wallet
        </h4>

        <div className="flex flex-col space-y-4 mt-6">
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
