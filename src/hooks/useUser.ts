import { useStore, StoreDefaultValues } from "context/store.context";
import { PublicRouteEnum } from "enums/RouteEnum";
import { useRouter } from "next/router";

const useUser = () => {

    const { store, setStore, resetStore } = useStore();
    const router = useRouter();

    const logOut = () => {
        resetStore();
        router.push(PublicRouteEnum.SignIn);
    };

    const saveUserData = (userData: any) => {
        if(typeof window !== "undefined") return localStorage.setItem("user", JSON.stringify(userData));
        return console.error("FAILED TO SET USER DATA");
    };

    const getUserData = () => {
        const user = typeof window !== "undefined" && localStorage.getItem("user");
        return user ? JSON.parse(user) : StoreDefaultValues.store.user;
    };

    const getUserTokens = () => {
        return {
            access_token: typeof window !== "undefined" && localStorage.getItem("access_token"),
            refresh_token: typeof window !== "undefined" && localStorage.getItem("refresh_token")
        };
    };

    return {
        logOut,
        saveUserData,
        getUserData,
        getUserTokens
    };
};

export default useUser;