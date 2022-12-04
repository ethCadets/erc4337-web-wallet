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
  BUNDLER_URL,
  ENTRYPOINT_ADDRESS,
  WALLET_CONTRACT_ABI,
  WALLET_CONTRACT_ADDRESS,
} from '../../../constants';
import { useDMS } from '../../../hooks/useDMS';
import { wrapProvider, ClientConfig } from '@account-abstraction/sdk';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract, ethers, Signer } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
import BackButton from '../../../components/BackButton';

const Page: NextPage = () => {
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');
  const [timestampDiff, setTimestampDiff] = useState(0);

  const provider = useProvider();
  const { data: signer } = useSigner();
  const sdkConfig: ClientConfig = {
    entryPointAddress: ENTRYPOINT_ADDRESS,
    bundlerUrl: BUNDLER_URL,
  };
  const { doesSwitchAccountExist, switchAccount, triggerTimestamp } = useDMS();

  const setSwitch = async () => {
    // const aaProvider = await wrapProvider(
    //   provider as JsonRpcProvider,
    //   sdkConfig,
    //   signer as Signer
    // );
    // const aaSigner = aaProvider.getSigner();
    // const phantomAddress = await aaSigner.getAddress();
    // console.log({ phantomAddress });
    // const tx = await signer?.sendTransaction({
    //   to: phantomAddress,
    //   value: ethers.utils.parseEther('0.1'),
    //   gasLimit: (15e6).toString(),
    // });
    // console.log({ tx });
    // await tx?.wait();

    // console.log(WALLET_CONTRACT_ADDRESS);
    // // const tx = await signer?.sendTransaction({
    // //   to: WALLET_CONTRACT_ADDRESS,
    // //   value: ethers.utils.parseEther('0.1'),
    // //   gasLimit: 15_000_000,
    // // });
    // // await tx?.wait();
    // const contract = new Contract(
    //   WALLET_CONTRACT_ADDRESS,
    //   WALLET_CONTRACT_ABI,
    //   aaSigner
    // );
    // await contract.setSwitch(beneficiaryAddress, timestampDiff, {
    //   gasLimit: 15_000_000,
    // });
    toast.success('Dead man switch setup');
  };

  return (
    <Layout>
      <Toaster />
      <div className="p-8">
        <BackButton />
        <h1 className="text-2xl mt-5 font-bold">Manage Dead-man Switch</h1>

        {doesSwitchAccountExist && (
          <div className="mt-4">
            <h2 className="text-xl font-medium">Switch account already set</h2>
            <p className="mt-2">
              Address: <span className='bg-gray-100 font-mono rounded px-2 py-1'>{switchAccount as string}</span>
            </p>
            <p className="mt-2">Timestamp diff: {triggerTimestamp as string}</p>
          </div>
        )}

        {!doesSwitchAccountExist && (
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
        )}
      </div>
    </Layout>
  );
};

export default Page;
