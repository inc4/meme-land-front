import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import ConnectionPending from "./components/ConnectionPending";
import ConnectWallet from "./components/ConnectWallet";
import InviteCode from "./components/InviteCode";

const Login = () => {
  const { connecting, connected, autoConnect, wallet, disconnect } = useWallet();

  // Detect manual wallet disconnection from wallet extension
  useEffect(() => {
    const provider = window.solana;

    if (provider && disconnect) {
      provider.on('disconnect', disconnect);

      return () => {
        provider.off('disconnect', disconnect);
      };
    }
  }, [disconnect]);

  useEffect(() => {
    if (!wallet || !disconnect) return;

    const { readyState, adapter } = wallet;

    // Manually trigger disconnect() if wallet is not installed
    if (readyState === WalletReadyState.NotDetected) {
      window.open(adapter.url);
      disconnect();
      return;
    }

    // Manually trigger disconnect() if wallet is unsupported
    if (readyState === WalletReadyState.Unsupported) {
      alert('Unsupported wallet');
      disconnect();
      return;
    }
  }, [wallet, disconnect])

  return (
    <div className="flex justify-center items-center h-full">
      {connecting ? (
        <ConnectionPending />
      ) : connected || (autoConnect && wallet) ? (
        <InviteCode />
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Login;
