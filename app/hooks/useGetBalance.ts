import {useEffect, useState} from "react";
import fetchSolBalance from "~/utils/fetchSolBalance";

const useGetBalance = () => {
  const [balance, setBalance] = useState(0);
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    if (userAddress) {
      fetchSolBalance(userAddress)
        .then((bal) => setBalance(bal))
    }
  }, [userAddress]);

  const getAddress = async () => {
    const resp = await window.solana.connect(); // triggers the Phantom popup
    return setUserAddress(resp.publicKey.toString());
  };

  return {userAddress, balance}
};

export default useGetBalance;