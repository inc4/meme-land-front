import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router";
import { WalletReadyState } from "@solana/wallet-adapter-base";

import ConnectionPending from "./components/ConnectionPending";
import ConnectWallet from "./components/ConnectWallet";
import InviteCode from "./components/InviteCode";
import Spinner from "~/components/Spinner";
import useWalletByAddress from "~/hooks/useWalletByAddress";
import { HOME_PAGE } from "~/utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const { connecting, connected, autoConnect, wallet, disconnect } = useWallet();
  const { isLoading, data } = useWalletByAddress();

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

  // Redirect to home page if wallet is verified
  useEffect(() => {
    if (data) navigate(HOME_PAGE);
  }, [data]);

  if (isLoading) {
    return (
      <Spinner wrapperStyles="fixed inset-0 flex justify-center items-center w-full h-dvh bg-background" />
    );
  }

  return (
    <div className="grow flex justify-center items-center">
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
