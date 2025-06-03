import { type FC, type PropsWithChildren } from 'react';
import { useNavigate, useLocation } from "react-router";
import { ROOT_PAGE } from '~/utils/constants';

const WithAuthHOC = <T extends object>(WrappedComponent: FC<PropsWithChildren<T>>) => {
  return (props: PropsWithChildren<T>) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // TODO: Change hardcoded value to the real isLoggedIn check
    const isLoggedIn = true;
    const publicRoutes = [ROOT_PAGE];

    const isPublicRoute = (path: string) => {
      return !!publicRoutes.find((r) => r === path);
    };
  
    if (!isLoggedIn && !isPublicRoute(pathname)) {
      navigate(ROOT_PAGE, { replace: true });
      return;
    }
  
    return <WrappedComponent {...props} />;
  }
};

export default WithAuthHOC;
