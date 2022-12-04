import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BackButton from '../../../../../components/BackButton';
import { Button } from '../../../../../components/Button';
import { Layout } from '../../../../../components/Layout';
import { extractListOfFunctionsFromABI, getABI } from '../../../../../utils';
import { useSignMessage } from 'wagmi';
import toast, { Toaster } from 'react-hot-toast';

interface IFunction {
  name: string;
}

const Page: NextPage = () => {
  const { query } = useRouter();
  const { address } = query;
  const [functions, setFunctions] = useState<IFunction[]>([]);

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "Approve Access to the function",
  })

  const onSubmit = async () => {
    signMessage()
    toast.success('Access updated', {
      position: 'bottom-center',
    });
  };


  useEffect(() => {
    getABI(address as string)
      .then(extractListOfFunctionsFromABI)
      .then(setFunctions);
  }, [address]);

  return (
    <Layout>
      <div className="p-8">
        <BackButton />
        <div className='my-8'>
          <h1 className="text-2xl font-bold">Configure contract allowance</h1>
          <p>Address: {address}</p>
        </div>

        <div className="flex flex-col mt-4 gap-4 ">
          {functions.map((func) => {
            return (
              <div className="flex flex-row justify-between border border-gray-300 px-4 py-2 rounded-lg items-center max-w-md">
                <p className="font-medium">{func.name}</p>
                <Button className="ml-8" onClick={onSubmit}>Allow </Button>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
