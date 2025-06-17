import { useEffect, useState, type ReactNode } from 'react';
import { useNavigate, useLocation } from "react-router";
import { useWallet } from '@solana/wallet-adapter-react';

import Spinner from '../Spinner';
import { checkIsVerified } from "~/utils/request";
import { CONNECT_PAGE } from '~/utils/constants';

const RouteGuard = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { publicKey, autoConnect, disconnect } = useWallet();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const publicRoutes = [CONNECT_PAGE];

  const isPublicRoute = (path: string) => {
    return !!publicRoutes.find((r) => r === path);
  };

  // Detect manual wallet disconnection from wallet extension
  useEffect(() => {
    const provider = window.solana;

    if (provider && disconnect) {

      const handleDisconnect = () => {
        setIsVerified(false);
        disconnect();
      };

      provider.on('disconnect', handleDisconnect);

      return () => {
        provider.off('disconnect', handleDisconnect);
      };
    }
  }, [disconnect]);

  useEffect(() => {
    if (!publicKey && !autoConnect) {
      setIsLoading(false);
      return;
    }

    if (!publicKey || isVerified) return;

    (async () => {
      setIsLoading(true);

      const verified = await checkIsVerified(publicKey.toString());
      setIsVerified(verified);

      setIsLoading(false);
    })()
  }, [publicKey, autoConnect, pathname, isVerified]);

  if (isLoading) {
    return (
      <Spinner wrapperStyles="fixed inset-0 flex justify-center items-center w-full h-dvh bg-background" />
    );
  }

  if (!isVerified && !isPublicRoute(pathname)) {
    navigate(CONNECT_PAGE, { replace: true });
    return;
  }

  return children;
};

export default RouteGuard;
