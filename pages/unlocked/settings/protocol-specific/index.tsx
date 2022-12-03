import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, FC } from 'react';
import { Button } from '../../../../components/Button';
import { Layout } from '../../../../components/Layout';

interface IContractCardProps {
  address: string;
}

const ContractCard: FC<IContractCardProps> = ({ address }) => {
  const router = useRouter();

  const onConfigureClick = () => {
    router.push(`/unlocked/settings/protocol-specific/configure/${address}`);
  };

  return (
    <div className="flex border border-gray-300 p-2 rounded items-center">
      <p>{address}</p>
      <Button onClick={onConfigureClick} className="ml-8">
        Configure
      </Button>
    </div>
  );
};

const Page: NextPage = () => {
  const [enteredContractAddress, setEnteredContractAddress] = useState('');

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Protocol specific security</h1>

        <div className="flex flex-col mt-4">
          <label>Add a new contract</label>
          <input
            type="text"
            value={enteredContractAddress}
            onChange={(e) => setEnteredContractAddress(e.target.value)}
            className="border border-gray-300 rounded p-2 outline-none focus:border-gray-500"
            placeholder="Enter a contract address"
          />

          <Button variant="primary" className="mt-2">
            + Add
          </Button>
        </div>

        <hr className="mt-6" />

        <div className="flex flex-col mt-4 gap-4">
          <label>Configured contracts</label>
          <ContractCard address="0xF04eee2Fa7dd65913927377C38579F20ED05B2bE" />
          <ContractCard address="0xF04eee2Fa7dd65913927377C38579F20ED05B2bE" />
          <ContractCard address="0xF04eee2Fa7dd65913927377C38579F20ED05B2bE" />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
