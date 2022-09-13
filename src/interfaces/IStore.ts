import { RoleEnum } from "enums/RoleEnum";

interface IUserName {
    firstName: string;
    lastName: string;
};

interface IUserProps {
    id: string;
    name: IUserName;
    email: string;
    role: RoleEnum
};

interface IAuthorization {
    authToken: string;
    refreshToken: string;
    expiration: string;
    isAuthenticated: boolean;
}

export interface IGlobalStore {
    user: IUserProps;
    authorization: IAuthorization;
    application: any;
}

export interface IStore {
    store: IGlobalStore;
    setStore: (_store: IGlobalStore) => void;
};