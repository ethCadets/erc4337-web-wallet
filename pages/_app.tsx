import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { customRainbow } from '../utils/mobileWallet';
// import { safeWallet } from '../utils/safeWallet';
import { Provider as AnkrProvider } from 'ankr-react';
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  argentWallet,
  metaMaskWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { SafeConnector } from '@gnosis.pm/safe-apps-wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { GlobalContext } from '../contexts';
import { useState } from 'react';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      argentWallet({ chains }),
      customRainbow({ chains }),
      // safeWallet({chains})
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  const [authState, setAuthState] = useState<'locked' | 'unlocked'>('locked');

  return (
    <GlobalContext.Provider value={{ authState, setAuthState }}>
      <AnkrProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider coolMode chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </AnkrProvider>
    </GlobalContext.Provider>
  );
}
