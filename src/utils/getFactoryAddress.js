const getFactoryAddress = (chainId) => {
  if (chainId === 5) {
    // Goerli
    return "0x82D8e11D9c4386283e74748e20B33c49525942aA";
  }
  if (chainId === 137) {
    // Polygon
    return "0xa63B68dA994883D51114f8C9d2d1c4c0762C9038";
  }
  if (chainId === 80001) {
    // Polygon Mumbai
    return "0x7e5455dD558b82A71A2368078EA85eF496be7b57";
  }
  return "0x000000000000000000000000000000000000dEaD";
};

export default getFactoryAddress;
