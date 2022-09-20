import { createContext, FC, useContext, useEffect, useState } from "react";
import { IChildren } from "interfaces/IChildren";
import { IGlobalStore, IStore } from "interfaces/IStore";
import { RoleEnum } from "enums/RoleEnum";

export const StoreDefaultValues: IStore = {
    store: {
        user: {
            id: "",
            name: "",
            email: "",
            role: RoleEnum.Child,
            isEmailVerified: false,
            groups: [],
        }, 
        tokens: {
            access: {
                token: "",
                expires: new Date(),
            }, 
            refresh: {
                token: "",
                expires: new Date(),
            },
            isAuthenticated: false,
        }, 
        application: {
            menuActiveItem: 'home',
        },
    },
    setStore: (_store: IGlobalStore) => {},
    resetStore: () => {},
};
;

export const StoreContext = createContext<IStore>(StoreDefaultValues);
const getExpirationDate = (token: string) => {
    if(typeof window === "undefined") return;
    const base64Url = token.split(".")[1];
    const base64 = base64Url?.replace("-", "+")?.replace("_", "/");
    return JSON.parse(window.atob(base64)).exp;
}
const isTokenAlreadyExpired = (token: string) => {
    const expirationDate = getExpirationDate(token);
    return expirationDate * 1000 < Date.now();
}
export const StoreProvider: FC<IChildren> = ({ children }): JSX.Element => {

    const [localStorageUserData, setLocalStorageUserData] = useState<any>(typeof window !== "undefined" && JSON.parse(window.localStorage.getItem("user") || "{}"));
    const [localStorageAccessToken, setLocalStorageAccessToken] = useState<string>(typeof window !== "undefined" && window.localStorage.getItem("access_token") || "");
    const [localStorageRefreshToken, setLocalStorageRefreshToken] = useState<string>(typeof window !== "undefined" && window.localStorage.getItem("refresh_token") || "");
    
    const [store, setStoreState] = useState<IGlobalStore>(StoreDefaultValues.store);
    
    const setStore = (_store: IGlobalStore) => {
        if(_store.tokens.access.token.length > 0 || _store.tokens.refresh.token.length > 0) {
            localStorage.setItem("access_token", _store.tokens.access.token);
            localStorage.setItem("refresh_token", _store.tokens.refresh.token);
        }
        setStoreState({ ...store, ..._store});
    }


    const resetStore = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setStoreState(StoreDefaultValues.store);
    }

    useEffect(
        () => {
            setStore({
                user: {
                    id: localStorageUserData.id || "",
                    name: localStorageUserData.name || "",
                    email: localStorageUserData.email || "",
                    role: localStorageUserData.role || RoleEnum.Child,
                    isEmailVerified: localStorageUserData.isEmailVerified || false,
                    groups: localStorageUserData.groups || [],
                }, 
                tokens: {
                    access: {
                        token: localStorageAccessToken || "",
                        expires: new Date(),
                    },
                    refresh: {
                        token: localStorageRefreshToken || "",
                        expires: new Date(),
                    },
                    isAuthenticated: false,
                },
                application: {
                    menuActiveItem: 'home',
                },
            });
        }, []
    );
    
    return (
        <StoreContext.Provider value={{ store, setStore, resetStore }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext<IStore>(StoreContext);