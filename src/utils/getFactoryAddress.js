const getFactoryAddress = (chainId) => {
  if (chainId === 5) {
    // Goerli
    return "0x40ba239270CF49030837279C1D01781CBf377F6E";
  }
  if (chainId === 137) {
    // Polygon
    return "0x74eBee5c642701c011f8f1fCC336Af6C524e7754";
  }
  if (chainId === 80001) {
    // Polygon Mumbai
    return "0x0a80Ed498f9977c80E6354723cd92064eb925fA4";
  }
  return "0x000000000000000000000000000000000000dEaD";
};

export default getFactoryAddress;
