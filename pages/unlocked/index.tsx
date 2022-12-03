import { NextPage } from 'next';
import { Layout } from '../../components/Layout';

const Page: NextPage = () => {
  return (
    <Layout
      sidebarContent={
        <div className='p-4'>
          <h1 className='text-4xl font-bold'>ERC4337 web wallet</h1>
          <p className='text-gray-500'>This is the sidebar content</p>
        </div>
      }
    >
      <div className='p-4'>
        <h1 className='text-4xl font-bold'>ERC4337 web wallet</h1>
        <p className='text-xl'>This is the unlocked page</p>
      </div>
    </Layout>
  );
};

export default Page;
