export const shortenAddress = (
  address = '',
  leftSlice = 4,
  rightSlice = 7,
) => {
  if (address.length < (leftSlice + rightSlice)) {
    return address;
  }

  return `${address.slice(0, leftSlice)}...${address.slice(-rightSlice)}`;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));