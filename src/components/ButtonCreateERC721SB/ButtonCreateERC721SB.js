import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import abi from "./abi.json";
import PendingTxModal from "../PendingTxModal";
import { useAccount, useContract, useNetwork, useSigner } from "wagmi";
import { toast } from "react-toastify";
import getFactoryAddress from "../../utils/getFactoryAddress";

const ButtonCreateERC721SB = ({ onDeployed, name, symbol, tokenURI, recipient }) => {
  const { data: signer } = useSigner();
  const { data: account } = useAccount();
  const { activeChain } = useNetwork();
  const contract = useContract({
    addressOrName: getFactoryAddress(activeChain?.id),
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const [pendingTx, setPendingTx] = useState(false);

  const createContract = async () => {
    if (!account?.address) {
      toast.error("Please connect your wallet");
      return;
    }
    setPendingTx("Sign the transaction for minting your soulbound NFT.");

    const mintPrice = contract.MintPrice();

    var overrideOptions = {
      value: mintPrice
    };

    const tx = await contract.buildERC721SB(name, symbol, tokenURI, recipient, overrideOptions);
    setPendingTx("Deploying ERC721SB contract.");
    const receipt = await tx.wait();
    onDeployed?.(receipt?.events?.[0]?.args?._contract);
  };

  const handleButtonClick = async () => {
    try {
      await createContract();
    } catch (err) {
      console.error(err);
    }
    setPendingTx(false);
  };

  return (
    <>
      {pendingTx ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          onClick={handleButtonClick}
          disabled={pendingTx}
        >
          Mint nft
        </Button>
      )}
      <PendingTxModal pendingTx={pendingTx} />
    </>
  );
};

export default ButtonCreateERC721SB;
