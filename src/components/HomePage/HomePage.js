import styles from "../../../styles/Home.module.css";
import MintNFT from "../MintNFT";
import { useState } from "react";
import { Box } from "@mui/system";
import CreateERC721SB from "../CreateERC721SB";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [contractAddress, setContractAddress] = useState();

  return (
    <>
      <h1 className={styles.title}>Soulbound</h1>
      <p className={styles.desc}>Mint Souldbound NFT's</p>

      {contractAddress ? (
        <MintNFT contractAddress={contractAddress} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          p={3}
          gap={3}
        >
          <Typography variant="h5" color="#000000">
            Get started: deploy your ERC721SB smart contract.
          </Typography>
          <CreateERC721SB onDeployed={setContractAddress} />
        </Box>
      )}
    </>
  );
};

export default HomePage;
