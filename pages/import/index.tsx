import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import BackButton from '../../components/BackButton';

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <BackButton />
      <div className="flex flex-col gap-y-5 mt-10">
        <p className="text-2xl font-bold">Import wallet</p>
        <Button
          variant="primary"
          className="max-w-fit flex gap-x-2 items-center"
          onClick={() => router.push('/import/dms')}
        >
          <ArrowPathIcon className="w-5" />
          Recover using DMS
        </Button>
      </div>
    </Layout>
  );
};

export default Page;
