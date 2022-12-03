import { NextPage } from 'next';
import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import {
  WALLET_CONTRACT_ABI,
  WALLET_CONTRACT_ADDRESS,
} from '../../../constants';
import { useDMS } from '../../../hooks/useDMS';

const Page: NextPage = () => {
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');
  const [timestampDiff, setTimestampDiff] = useState(0);

  const { config } = usePrepareContractWrite({
    address: WALLET_CONTRACT_ADDRESS,
    abi: WALLET_CONTRACT_ABI,
    functionName: 'setSwitch',
    args: [beneficiaryAddress, timestampDiff],
  });
  const { write, isSuccess, isLoading, isError } = useContractWrite(config);

  const { doesSwitchAccountExist, switchAccount, triggerTimestamp } = useDMS();

  const setSwitch = async () => {
    write?.();
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
