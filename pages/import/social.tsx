import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NextPage } from 'next';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import toast, { Toaster } from 'react-hot-toast';
import BackButton from '../../components/BackButton';

const Page: NextPage = () => {
  const onClick = () => {
    toast.success(
      'Recover process started. Once all the guardians have requested the recovery, the wallet will be recovered.',
      {
        position: 'bottom-center',
      }
    );
  };

  return (
    <Layout>
      <Toaster />
      <BackButton />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Social recovery</h1>
        <h4 className="text-slate-700">
          Connect your wallet and sign a message to request a social recovery
        </h4>

        <div className="flex flex-col space-y-4 mt-6">
          <ConnectButton />

          <div className="flex flex-col space-y-2">
            <label className="text-slate-700">
              Address of the wallet you want to recover
            </label>
            <input className="border border-slate-300 rounded-md p-2" />
          </div>

          <Button
            variant="primary"
            className="max-w-fit flex gap-x-2 items-center"
            onClick={onClick}
          >
            Request recovery
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
