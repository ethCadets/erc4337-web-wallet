import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '../../../../../components/Button';
import { Layout } from '../../../../../components/Layout';
import { extractListOfFunctionsFromABI, getABI } from '../../../../../utils';

interface IFunction {
  name: string;
}

const Page: NextPage = () => {
  const { query } = useRouter();
  const { address } = query;
  const [functions, setFunctions] = useState<IFunction[]>([]);

  useEffect(() => {
    getABI(address as string)
      .then(extractListOfFunctionsFromABI)
      .then(setFunctions);
  }, [address]);

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Configure contract allowance</h1>
        <p>Address: {address}</p>

        <div className="flex flex-col mt-4 gap-4">
          {functions.map((func) => {
            return (
              <div className="flex border border-gray-300 p-2 rounded items-center">
                <p>{func.name}</p>
                <Button className="ml-8">Allow</Button>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
