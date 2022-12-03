import { NextPage } from 'next';
import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
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
      <h1 className="text-2xl font-bold">Import wallet using DMS</h1>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="walletContractAddress">Wallet contract address</label>
        <Input
          id="walletContractAddress"
          type="text"
          value={walletContractAddress}
          onChange={(e) => setWalletContractAddress(e.target.value)}
        />

        <Button variant="primary" onClick={submitRequest}>
          Request Recovery
        </Button>
      </div>
    </Layout>
  );
};

export default Page;
