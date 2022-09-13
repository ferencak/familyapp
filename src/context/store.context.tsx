import { createContext, FC, useContext, useState } from "react";
import { IChildren } from "interfaces/IChildren";
import { IGlobalStore, IStore } from "interfaces/IStore";
import { RoleEnum } from "enums/RoleEnum";

const StoreDefaultValues: IStore = {
    store: {
        user: {
            id: "",
            name: {
                firstName: "",
                lastName: "",
            },
            email: "",
            role: RoleEnum.Child,
        }, 
        authorization: {
            authToken: "",
            expiration: "",
            refreshToken: "",
            isAuthenticated: false,
        }, 
        application: null,
    },
    setStore: (_store: IGlobalStore) => {},
};

export const StoreContext = createContext<IStore>(StoreDefaultValues);

export const StoreProvider: FC<IChildren> = ({ children }): JSX.Element => {
    const [store, setStoreState] = useState<IGlobalStore>(StoreDefaultValues.store);
    
    const setStore = (_store: IGlobalStore) => {
        setStoreState({ ...store, ..._store});
    }
    
    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext<IStore>(StoreContext);