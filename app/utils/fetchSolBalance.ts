import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";
import getConfig from "~/config";

const { NETWORK_ID } = getConfig();

const connection = new Connection(clusterApiUrl(NETWORK_ID));

const fetchBalance = async (pubKeyString) => {
  try {
    const publicKey = new PublicKey(pubKeyString);
    const lamports = await connection.getBalance(publicKey);
    return lamports / 1e9;
  } catch (err) {
    console.error('Failed to fetch balance:', err);
  }
};

export default fetchBalance;
