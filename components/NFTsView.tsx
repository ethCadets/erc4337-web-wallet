import { useEffect } from 'react';

const fetchNFTs = async (walletAddress: string) => {
  // fetch txs from /api/nfts
  const response = await fetch(`/api/nfts?walletAddress=${walletAddress}`);
  const nfts = await response.json();
  return nfts;
};

interface INFTsViewProps {
  walletAddress: string;
}

export const NFTsView: React.FC<INFTsViewProps> = ({ walletAddress }) => {
  useEffect(() => {
    fetchNFTs(walletAddress).then(console.log);
  }, [walletAddress]);

  return (
    <div>
      <h1>nfts</h1>
      {/* Render nfts here */}
    </div>
  );
};
