import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../contexts';
import { Button } from './Button';

export const Landing = () => {
  const { setAuthState } = useContext(GlobalContext);
  const router = useRouter();

  const onCreateClick = () => {
    setAuthState('unlocked');
    router.push('/unlocked');
  };

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold'>ERC4337 web wallet</h1>
      <ConnectButton />

      <Button onClick={onCreateClick} variant='primary'>
        + Create new wallet
      </Button>
    </div>
  );
};
