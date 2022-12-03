import { NextPage } from 'next';
import { useState } from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useSigner,
} from 'wagmi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import {
  WALLET_CONTRACT_ABI,
  WALLET_CONTRACT_ADDRESS,
} from '../../../constants';
import { useDMS } from '../../../hooks/useDMS';
import { wrapProvider } from '@account-abstraction/sdk';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract, Signer } from 'ethers';

const Page: NextPage = () => {
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');
  const [timestampDiff, setTimestampDiff] = useState(0);

  const provider = useProvider();
  const { data: signer } = useSigner();
  const sdkConfig = {
    chainId: 80001,
    entryPointAddress: '0x2DF1592238420ecFe7f2431360e224707e77fA0E',
    bundlerUrl: 'https://bundler-production.up.railway.app:3000/rpc',
  };
  const { doesSwitchAccountExist, switchAccount, triggerTimestamp } = useDMS();

  const setSwitch = async () => {
    const aaProvider = await wrapProvider(
      provider as JsonRpcProvider,
      sdkConfig,
      signer as Signer
    );
    const aaSigner = aaProvider.getSigner();
    const contract = new Contract(
      WALLET_CONTRACT_ADDRESS,
      WALLET_CONTRACT_ABI,
      aaSigner
    );
    await contract.setSwitch(beneficiaryAddress, timestampDiff);
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Manage Dead-man Switch</h1>

        {doesSwitchAccountExist && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Switch Account Already Set</h2>
            <p className="mt-2">Address: {switchAccount as string}</p>
            <p className="mt-2">Timestamp diff: {triggerTimestamp as string}</p>
          </div>
        )}

        {/* {!doesSwitchAccountExist && ( */}
        <>
          <div className="mt-4">
            <label>Beneficiary address</label>
            <Input
              type="text"
              value={beneficiaryAddress}
              onChange={(e) => setBeneficiaryAddress(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label>Timestamp difference</label>
            <Input
              type="text"
              value={timestampDiff}
              onChange={(e) => setTimestampDiff(Number(e.target.value))}
            />
          </div>

          <Button onClick={setSwitch} variant="primary" className="mt-4">
            Set Switch
          </Button>
        </>
        {/* )} */}
      </div>
    </Layout>
  );
};

export default Page;
