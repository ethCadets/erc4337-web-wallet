import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Import wallet</h1>

      <Button onClick={() => router.push('/import/dms')}>
        Recover using DMS
      </Button>
    </Layout>
  );
};

export default Page;
