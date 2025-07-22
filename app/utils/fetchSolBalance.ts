import { PublicKey, Connection } from "@solana/web3.js";

const connection = new Connection(import.meta.env.VITE_RPC_URL);

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
