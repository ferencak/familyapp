import { FC, useEffect } from "react";
import type { AppProps } from 'next/app';

import { StoreProvider, useStore } from "context/store.context";
import { IChildren } from "interfaces/IChildren";
import { useRouter } from "next/router";
import { PublicRouteEnum } from "enums/RouteEnum";

import '../../static/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <StoreProvider>
    <Authorization>
      <Component {...pageProps} />
    </Authorization>
  </StoreProvider>
);

const Authorization: FC<IChildren> = ({ children }): JSX.Element => {
  const { store: { authorization: { isAuthenticated }} } = useStore();
  const router = useRouter();

  useEffect(() => {
    const currentRouteIsPublic = Object.values(PublicRouteEnum).includes(router.pathname);
    if (!isAuthenticated && !currentRouteIsPublic) {
      router.push(PublicRouteEnum.Crossroad);
    }
  }, [isAuthenticated, router]);

  return children;
};

export default App;