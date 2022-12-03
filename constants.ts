import walletAbiFile from './abis/secureWallet.json';

export const WALLET_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_WALLET_CONTRACT_ADDRESS as string;
export const WALLET_CONTRACT_ABI = walletAbiFile.abi;
