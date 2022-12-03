import { useEffect, useState } from 'react';

const fetchNFTs = async (walletAddress: string) => {
  // fetch txs from /api/nfts
  const response = await fetch(`/api/nfts?walletAddress=${walletAddress}`);
  const nfts = await response.json();
  // console.log("nfts", nfts);
  return nfts;
};

interface INFTsViewProps {
  walletAddress: string;
}

export const NFTsView: React.FC<INFTsViewProps> = ({ walletAddress }) => {
  const [nftList, setNftList] = useState<any>();
  
  useEffect(() => {
    fetchNFTs(walletAddress).then(setNftList);
  }, [walletAddress]);

  return (
    <div>
      <h1>nfts</h1>
      {/* Render nfts here */}
    </div>
  );
};
