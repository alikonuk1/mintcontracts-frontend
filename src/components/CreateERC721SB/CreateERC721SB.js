import { Box, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { useAccount, useNetwork, useSigner } from "wagmi";
import ButtonCreateERC721SB from "../ButtonCreateERC721SB";
import { getAddressLink } from "../../utils/etherscanService";

const CreateERC721SB = ({ onDeployed }) => {
  const { data: signer } = useSigner();
  const { activeChain } = useNetwork();
  const { data: account } = useAccount({
    suspense: true,
  });

  const ownerBlockscanAddress = useMemo(
    () => getAddressLink(activeChain, account?.address),
    [activeChain, account]
  );

  const [name, setName] = useState("My Soulbound Token");
  const [symbol, setSymbol] = useState("SBT");
  const [tokenURI, setTokenURI] = useState("https://goerli.etherscan.io/address/0x40ba239270CF49030837279C1D01781CBf377F6E#code");
  const [owner, setOwner] = useState(account?.address);
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
        inputProps={owner}
        label="Contract Owner"
        onChange={(e) => setOwner(e.target.inputProps)}
      />
      <ButtonCreateERC721SB onDeployed={onDeployed} name={name} symbol={symbol} tokenURI={tokenURI} owner={owner}/>
    </Box>
  );
};

export default CreateERC721SB;
