import { Box, TextField } from "@mui/material";
import { useMemo, useState, useImperativeHandle } from "react";
import { useAccount, useNetwork, useSigner } from "wagmi";
import ButtonCreateERC721SB from "../ButtonCreateERC721SB";
import { getAddressLink } from "../../utils/etherscanService";

const CreateERC721SB = ({ onDeployed }) => {
  const { data: signer } = useSigner();
  const { activeChain } = useNetwork();
  const { data: account } = useAccount();
  const { address } = useAccount();

  const ownerBlockscanAddress = useMemo(
    () => getAddressLink(activeChain, account?.address),
    [activeChain, account?.address]
  );

  const [name, setName] = useState("My Soulbound Token");
  const [symbol, setSymbol] = useState("SBT");
  const [tokenURI, setTokenURI] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      gap={3}
    >
      <TextField
        value={name}
        label="Token Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={symbol}
        label="Token Symbol"
        onChange={(e) => setSymbol(e.target.value)}
      />
      <TextField
        value={tokenURI}
        label="Token URI"
        onChange={(e) => setTokenURI(e.target.value)}
      />
      <TextField
        value={recipient}
        label="Recipient"
        onChange={(e) => setRecipient(e.target.value)}
      />
      <ButtonCreateERC721SB onDeployed={onDeployed} name={name} symbol={symbol} tokenURI={tokenURI} recipient={recipient}/>
    </Box>
  );
};

export default CreateERC721SB;
