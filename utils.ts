export const truncateWalletAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getABI = async (contractAddress: string) => {
  const { abi } = await fetch(
    `/api/abi?contractAddress=${contractAddress}`
  ).then((res) => res.json());
  console.log({ abi });
  return abi;
};

export const extractListOfFunctionsFromABI = (abi: any) => {
  return abi.filter(
    (item: any) => item.type === 'function' && item.stateMutability !== 'view'
  );
};
