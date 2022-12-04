import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, FC } from 'react';
import { Button } from '../../../../components/Button';
import { Layout } from '../../../../components/Layout';
import { PlusIcon } from '@heroicons/react/24/solid';

interface IContractCardProps {
  address: string;
}

const ContractCard: FC<IContractCardProps> = ({ address }) => {
  const router = useRouter();

  const onConfigureClick = () => {
    router.push(`/unlocked/settings/protocol-specific/configure/${address}`);
  };

  return (
    <div className="flex border border-gray-300 p-2 rounded-lg items-center">
      <p>{address}</p>
      <Button onClick={onConfigureClick} className="ml-8">
        Configure
      </Button>
    </div>
  );
};

const Page: NextPage = () => {
  const router = useRouter();
  const [enteredContractAddress, setEnteredContractAddress] = useState('');

  return (
    <Layout>
      <div className="py-10 px-4 max-w-xl">
        <p className="text-2xl font-bold">Protocol specific security</p>

        <div className="flex flex-col mt-4">
          <label>Add a new contract</label>
          <input
            type="text"
            value={enteredContractAddress}
            onChange={(e) => setEnteredContractAddress(e.target.value)}
            className="border border-gray-300 rounded p-2 outline-none focus:border-gray-500"
            placeholder="Enter a contract address"
          />

          <Button
            onClick={() =>
              router.push(
                `/unlocked/settings/protocol-specific/configure/${enteredContractAddress}`
              )
            }
            variant="primary"
            className="mt-2 flex items-center"
          >
            <PlusIcon className="w-4 mr-2" />
            Add
          </Button>
        </div>

        <hr className="mt-6" />

        <div className="flex flex-col mt-4 gap-4">
          <label>Configured contracts</label>
          <ContractCard address="0xF04eee2Fa7dd65913927377C38579F20ED05B2bE" />
          <ContractCard address="0x923F3250C2c3c29b13921C1665a83Ac835514c65" />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
