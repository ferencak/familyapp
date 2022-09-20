import Menu from "components/menu/Menu";
import TopBar from "components/top-bar/TopBar";
import { useStore } from "context/store.context";
import useUser from "hooks/useUser";
import { IChildren } from "interfaces/IChildren";
import { FC, useEffect } from "react";

const PageLayer: FC<IChildren> = ({ children }): JSX.Element => {
    const { store } = useStore();
    const { getUserData } = useUser();

    if(!store.user.email) return <></>;

    useEffect(
        () => {
            console.log(store);
        }, []
    );

    return (
        <div className="flex flex-col w-full h-full overscroll-none">
            <TopBar />
            { children }
            <Menu />
        </div>
    );
};

export default PageLayer;