interface IUserProps {
    id: string;
    name: string;
    email: string;
    role: string;
    isEmailVerified: boolean;
    groups: [];
};

interface IAuthorization {
    access: {
        token: string;
        expires: Date;
    };
    refresh: {
        token: string;
        expires: Date;
    };
    isAuthenticated: boolean;
}

interface IApplication {
    menuActiveItem: string;
}

export interface IGlobalStore {
    user: IUserProps;
    tokens: IAuthorization;
    application: IApplication;
}

export interface IStore {
    store: IGlobalStore;
    setStore: (_store: IGlobalStore) => void;
    resetStore: () => void;
};