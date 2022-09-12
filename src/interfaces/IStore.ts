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

export interface IStoreProps {
    user: IUserProps;
    authorization: IAuthorization;
    application: any;
    setStore: (_store: IStoreProps) => void;
};