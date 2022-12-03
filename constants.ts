import walletAbiFile from './abis/secureWallet.json';

export const WALLET_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_WALLET_CONTRACT_ADDRESS as string;
export const WALLET_CONTRACT_ABI = walletAbiFile.abi;

export const BUNDLER_URL = 'https://bundler-production.up.railway.app/rpc';
export const ENTRYPOINT_ADDRESS = process.env
  .NEXT_PUBLIC_ENTRYPOINT_ADDRESS as string;
