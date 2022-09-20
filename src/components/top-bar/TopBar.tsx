import { useStore } from "context/store.context";
import { FC } from "react";
import { RiSearch2Line, RiSettings2Line } from "react-icons/ri";
import { TbCalendar } from "react-icons/tb";

const TopBar: FC = (): JSX.Element => {
    const { store } = useStore();

    return (
        <div className="flex flex-col w-full p-10 pb-0">
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex items-center justify-center rounded-full border border-1 border-gray-100 p-2">
                    <RiSearch2Line className="items-center text-black/80 text-xl gap-7" />
                </div>
                <h1 className="font-bold font-medium text-black/60">Overview</h1>
                <div className="flex items-center justify-center rounded-full border border-1 border-gray-100 p-2">
                    <TbCalendar className=" items-center text-black/70 text-xl gap-7" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;