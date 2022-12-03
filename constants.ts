import walletAbiFile from './abis/secureWallet.json';

export const WALLET_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_WALLET_CONTRACT_ADDRESS as string;
export const WALLET_CONTRACT_ABI = walletAbiFile.abi;

export const BUNDLER_URL = 'http://192.168.0.110:3000/rpc';
export const ENTRYPOINT_ADDRESS = process.env
  .NEXT_PUBLIC_ENTRYPOINT_ADDRESS as string;
