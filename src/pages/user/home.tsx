import { useStore } from "context/store.context";
import type { NextPage } from 'next';
import { FC } from "react";
import { RiSearch2Line, RiSettings2Line } from "react-icons/ri";

const Home: NextPage = (): JSX.Element => {
    const { store } = useStore();
    
    return (
        <div className="flex flex-col w-full h-full gap-10 p-10">
            <TodoSection />
        </div>
    );
};

const TodoSection: FC = (): JSX.Element => (
    <div className="flex flex-col w-full gap-5">
        <div className="flex flex-row w-full bg-white border border-gray-50 text-black p-2 text-sm rounded-xl">
            <div className="p-3 w-20 flex items-cenmter justify-center text-center text-2xl">
                👋
            </div>
            <div className="py-2">
                <h1 className="font-medium">Welcome back!</h1>
                <span className="font-light">You have <b>2</b> tasks to do today</span>
            </div>
        </div>
        <div className="flex flex-col max-w-full gap-5">
            <div className="flex flex-row max-w-50% overflow-x-scroll webkit-inline-box gap-5">
                <div className="flex flex-col justify-center items-center text-white w-4rem h-5rem rounded-xl bg-orange-500">
                    <span className="font-extralight">Tue</span>
                    <span className="font-medium">12</span>
                </div>
                <div className="flex flex-col justify-center items-center text-black w-4rem h-5rem rounded-xl bg-white border-1">
                    <span className="font-extralight">Wed</span>
                    <span className="font-medium">13</span>
                </div>
                <div className="flex flex-col justify-center items-center text-black w-4rem h-5rem rounded-xl bg-white border-1">
                    <span className="font-extralight">Thu</span>
                    <span className="font-medium">14</span>
                </div>
                <div className="flex flex-col justify-center items-center text-black w-4rem h-5rem rounded-xl bg-white border-1">
                    <span className="font-extralight">Fri</span>
                    <span className="font-medium">15</span>
                </div>
                <div className="flex flex-col justify-center items-center text-black w-4rem h-5rem rounded-xl bg-white border-1">
                    <span className="font-extralight">Sat</span>
                    <span className="font-medium">16</span>
                </div>
                
            </div>
            <div className="flex flex-col w-full pr-10">
                <h1 className="font-medium">Today Tasks</h1>
            </div>
        </div>
    </div>
);

export default Home;