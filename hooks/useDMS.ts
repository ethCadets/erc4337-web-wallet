import { BigNumber } from 'ethers';
import { useContractRead } from 'wagmi';
import { WALLET_CONTRACT_ABI, WALLET_CONTRACT_ADDRESS } from '../constants';

export const useDMS = () => {
  const { data: switchAccount } = useContractRead({
    address: WALLET_CONTRACT_ADDRESS,
    abi: WALLET_CONTRACT_ABI,
    functionName: 'switchAccount',
  });

  const { data: triggerTimestamp } = useContractRead({
    address: WALLET_CONTRACT_ADDRESS,
    abi: WALLET_CONTRACT_ABI,
    functionName: 'switchTriggerBlockDiff',
  });

  const doesSwitchAccountExist =
    switchAccount !== '0x0000000000000000000000000000000000000000';

  return {
    doesSwitchAccountExist,
    switchAccount,
    triggerTimestamp: (triggerTimestamp as BigNumber)?.toString(),
  };
};
