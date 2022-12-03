import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';

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
];

const SettingCard: FC<ISettingsCardProps> = ({ title, description, route }) => {
  const router = useRouter();

  const onSetupClick = () => {
    router.push(route);
  };

  return (
    <div className="flex flex-col justify-center p-4 space-y-2 bg-white rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <Button onClick={onSetupClick}>Setup</Button>
    </div>
  );
};

const Page: NextPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-4xl font-bold">Settings</h1>
        <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
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
