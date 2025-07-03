import { useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from "react-router";
import { useWallet } from '@solana/wallet-adapter-react';

import Spinner from '../Spinner';
import useWalletByAddress from '~/hooks/useWalletByAddress';
import { CONNECT_PAGE } from '~/utils/constants';

const RouteGuard = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { disconnect } = useWallet();
  const { isLoading, error, data } = useWalletByAddress();

  const publicRoutes = [CONNECT_PAGE];

  const isPublicRoute = (path: string) => {
    return !!publicRoutes.find((r) => r === path);
  };

  // Detect manual wallet disconnection from wallet extension
  useEffect(() => {
    const provider = window.solana;

    if (provider) {

      const handleDisconnect = () => {
        disconnect();
      };

      const handleAccountChanged = () => {
        window.location.reload();
      };

      provider.on('disconnect', handleDisconnect);
      provider.on('accountChanged', handleAccountChanged);

      return () => {
        provider.off('disconnect', handleDisconnect);
        provider.off('accountChanged', handleAccountChanged);
      };
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (!data || error) navigate(CONNECT_PAGE);
  }, [data, isLoading, error, pathname])

  if (isLoading) {
    return (
      <Spinner wrapperStyles="fixed inset-0 flex justify-center items-center w-full h-dvh bg-background" />
    );
  }

  if (!data && !isPublicRoute(pathname)) {
    return;
  }

  return children;
};

export default RouteGuard;
