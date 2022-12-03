import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Layout } from '../../../components/Layout';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface ISettingsCardProps {
  title: string;
  description: string;
  route: string;
}

const settingItems: ISettingsCardProps[] = [
  {
    title: 'Wallet recovery',
    description: 'Recover your wallet from a seed phrase',
    route: '/unlocked/settings/recover',
  },
  {
    title: 'Wallet guardians',
    description: 'Manage your wallet guardians',
    route: '/unlocked/settings/guardians',
  },
  {
    title: 'Kill switch',
    description: 'Manage your kill switch',
    route: '/unlocked/settings/killswitch',
  },
  {
    title: 'Dead Man Switch',
    description: 'Manage your DMS',
    route: '/unlocked/settings/dms',
  },
  {
    title: 'Protocol specific security',
    description: 'Manage your protocol specific security',
    route: '/unlocked/settings/protocol-specific',
  },
];

const SettingCard: FC<ISettingsCardProps> = ({ title, description, route }) => {
  const router = useRouter();

  const onSetupClick = () => {
    router.push(route);
  };

  return (
    <div
      onClick={onSetupClick}
      className="flex flex-row group justify-between px-6 py-4 rounded-xl bg-white max-w-xl cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <ChevronRightIcon className='w-5 text-gray-500 group-hover:text-gray-800 group-hover:translate-x-1 transition duration-200' />
    </div>
  );
};

const Page: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-y-8 p-8 min-h-screen bg-gray-100">
        <div className="w-full flex flex-row gap-x-5">
          <p className=" text-[32px] font-semibold">Settings</p>
        </div>
        <div className="flex flex-col flex-grow gap-y-6 overflow-y-auto">
          {settingItems.map((item) => (
            <SettingCard
              key={item.title}
              title={item.title}
              description={item.description}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
