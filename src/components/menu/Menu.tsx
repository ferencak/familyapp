import { FC } from "react";
import { RiGridFill, RiMessage3Line } from "react-icons/ri";
import { useStore } from "context/store.context";
import { IoMdPeople, IoMdStats } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { IoStatsChartOutline } from "react-icons/io5";
const MenuList: any[] = [
    {
        name: "home",
        icon: HiHome,
    },
    {
        name: "calendar",
        icon: IoMdStats,
    },
    {
        name: "messages",
        icon: RiMessage3Line,
    },
    {
        name: "user",
        special: true
    },
];

const Menu: FC = (): JSX.Element => {
    const { store, setStore } = useStore();

    const onMenuChangeHandler = (name: string): void => {
        setStore({
            ...store,
            application: {
                ...store.application,
                menuActiveItem: name,
            }
        });
    };

    return (
        <div className="absolute bottom-0 flex flex-row w-full items-center justify-between shadow-2xl">
            <div className="flex flex-row w-full bg-white">
                <ul className="flex w-full justify-between items-center p-3">
                    { MenuList.map(({ special, name: itemName, icon: IconComponent }, index) => {
                        return (
                            <li 
                                key={index}
                                className="flex-1"
                                onClick={() => onMenuChangeHandler(itemName)}
                            >
                                <a className={`${special ? 'block bottom-0' : 'relative block p-4'}`}>
                                    <div 
                                        className={`
                                            flex flex-col items-center justify-center 
                                            ${store.application.menuActiveItem === itemName ? 'text-black' : 'text-gray-300'}
                                            duration-300
                                        `}
                                    >
                                        { IconComponent && <IconComponent className="flex-shrink-0 w-5 h-5" /> }
                                        { special && <img src="https://avatars.githubusercontent.com/u/26286412?s=400&u=532bf7d17c0632c382eeaae639772032ab9e834a&v=4" className="rounded-full w-5 h-5" /> }
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Menu;