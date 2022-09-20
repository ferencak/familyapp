import { FC, useEffect, useState } from "react";
import type { AppProps } from 'next/app';

import { StoreProvider, useStore } from "context/store.context";
import { IChildren } from "interfaces/IChildren";
import { useRouter } from "next/router";
import { PrivateRouteEnum, PublicRouteEnum } from "enums/RouteEnum";

import '../../static/styles/globals.css';
import useUser from "hooks/useUser";
import useApi from "hooks/useApi";
import PageLayer from "components/layer/PageLayer";

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <StoreProvider>
        <Authorization>
          <TokenRefetcher>
            <PageLayer>
              <Component {...pageProps} />
            </PageLayer>
          </TokenRefetcher>
        </Authorization>
    </StoreProvider>
  );
};

const TokenRefetcher: FC<IChildren> = ({ children }): JSX.Element => {
  const { store, setStore } = useStore();
  const { call, response: tokenRefetchResponse } = useApi({
    url: "/auth/refresh-tokens",
    method: "POST",
    withToken: true,
    data: {
      refreshToken: typeof window !== "undefined" && window.localStorage.getItem("refresh_token"),
    }
  });

  useEffect(
    () => {
      if(!localStorage.getItem("refresh_token")) return;
      const getExpirationDate = (token: string) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64)).exp;
      }
      const willTokenExpire = (token: string) => {
        const expirationDate = getExpirationDate(token);
        return expirationDate * 1000 < Date.now() + (30 * 60 * 1000);
      }
      if(willTokenExpire(localStorage.getItem("access_token") || "")) {
        call({
          refreshToken: typeof window !== "undefined" && window.localStorage.getItem("refresh_token"),
        });
      }
    }, []
  );

  useEffect(
    () => {
      if(!tokenRefetchResponse) return;
      setStore({
        ...store, 
        tokens: {
          ...store.tokens,
          access: {
            token: tokenRefetchResponse.access.token,
            expires: tokenRefetchResponse.access.expires,
          }, 
          refresh: {
            token: tokenRefetchResponse.refresh.token,
            expires: tokenRefetchResponse.refresh.expires,
          }
        }
      });
      localStorage.setItem("access_token", tokenRefetchResponse.access.token);
      localStorage.setItem("refresh_token", tokenRefetchResponse.refresh.token);
    }, [tokenRefetchResponse]
  );

  return children;
};

const Authorization: FC<IChildren> = ({ children }): JSX.Element => {
  const { store, setStore } = useStore();
  const { getUserData } = useUser();
  const router = useRouter();

  useEffect(
    () => {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      setStore({
          ...store,
          user: {
              ...getUserData(),
          },
          tokens: {
              access: {
                  token: access_token || "",
                  expires: new Date(),
              },
              refresh: {
                  token: refresh_token || "",
                  expires: new Date(),
              },
              isAuthenticated: true,
          },
      });
      const currentRouteIsPublic = Object.values(PublicRouteEnum).includes(router.pathname);

      if(!access_token || !refresh_token) {
        if (!store.tokens.isAuthenticated && !currentRouteIsPublic) {
          router.push(PublicRouteEnum.Crossroad);
        }
      }

      if ((access_token && refresh_token) && currentRouteIsPublic) {
        router.push(PrivateRouteEnum.Intro);
      }
    }, []
  )
  return children;
};

export default App;