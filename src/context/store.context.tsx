import { createContext, FC, useContext, useState } from "react";
import { IChildren } from "interfaces/IChildren";
import { IStoreProps } from "interfaces/IStore";
import { RoleEnum } from "enums/RoleEnum";

const StoreDefaultValues: IStoreProps = {
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
    setStore: (_store: IStoreProps) => {},
};

export const StoreContext = createContext<any>(StoreDefaultValues);

export const StoreProvider: FC<IChildren> = ({ children }): JSX.Element => {
    const [store, setStore] = useState<IStoreProps>();
    
    return (
        <StoreContext.Provider value={{ setStore, ...store }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = (): IStoreProps => useContext(StoreContext);