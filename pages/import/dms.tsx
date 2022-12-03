import { NextPage } from 'next';
import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Layout } from '../../components/Layout';
import { WALLET_CONTRACT_ABI, WALLET_CONTRACT_ADDRESS } from '../../constants';

const Page: NextPage = () => {
  const [walletContractAddress, setWalletContractAddress] = useState('');
  const { config } = usePrepareContractWrite({
    address: WALLET_CONTRACT_ADDRESS,
    abi: WALLET_CONTRACT_ABI,
    functionName: 'setSwitchRequest',
    args: [],
  });
  const { writeAsync } = useContractWrite(config);

  const submitRequest = async () => {
    writeAsync?.();
  };

  return (
    <Layout>
      <BackButton />
      <div className="flex flex-col gap-y-5 mt-10">
        <p className="text-2xl font-bold">Import wallet using DMS</p>
        <div>
          <label htmlFor="walletContractAddress">Wallet contract address</label>
          <Input
            id="walletContractAddress"
            className='mt-2 w-full'
            type="text"
            value={walletContractAddress}
            onChange={(e) => setWalletContractAddress(e.target.value)}
          />
        </div>
        <Button variant="primary" className='max-w-fit' onClick={submitRequest}>
          Request Recovery
        </Button>
      </div>
    </Layout>
  );
};

export default Page;
