import { useStore } from "context/store.context";
import type { NextPage } from 'next';
import { useState } from "react";
import IntroImage from "images/intro-image.svg";
import Image from "next/image";
import { HiOutlineLogout } from "react-icons/hi";
import { useRouter } from "next/router";
import { PublicRouteEnum } from "enums/RouteEnum";
const Intro: NextPage = (): JSX.Element => {

    const {
        store: {
            authorization: {
                isAuthenticated 
            }
        }
    } = useStore();
    const router = useRouter();

    const [comboSelected, setComboSelected] = useState<string>("");

    return (
        <div className="flex flex-col justify-center px-5 w-full h-full items-center -mt-5 gap-10">
            <div className="w-70% -mb-5 flex flex-row justify-center">
                <div className="flex flex-row gap-5 absolute text-2xl right-10 top-10 items-center">
                    <HiOutlineLogout 
                        className="text-blue-200 hover:text-blue-500 duration-300"
                        onClick={() => router.push(PublicRouteEnum.Crossroad)}
                    />
                </div>
                <Image src={IntroImage} alt="Intro" />
            </div>
            <div className="w-full flex flex-col gap-10">
                <div>
                    <h1 
                        className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"
                    >
                        Welcome here,
                    </h1>
                    <h1 
                        className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"
                    >
                        Nikolas!
                    </h1>
                </div>
                <div className="flex flex-col gap-3 px-10 -mb-5">
                    <div className="relative">
                        <input 
                            className="hidden group peer" 
                            type="radio" 
                            name="shippingOption" 
                            value="standard_alt" 
                            id="standard_alt"
                            defaultChecked={comboSelected === "create"} 
                            onClick={() => setComboSelected(comboSelected === "create" ? "" : "create")}
                        />

                        <label className={`duration-300 delay-100 block p-4 text-sm font-medium border border-gray-100 rounded-xl cursor-pointer transition-colors shadow-sm ${comboSelected === "create" && 'peer-checked:ring-1 peer-checked:border-blue-500 peer-checked:ring-blue-500'}`} htmlFor="standard_alt">
                            <span className="font-semibold">Create family group</span>
                            <span className="block mt-1 text-xs text-gray-500">
                                Then invite your family members
                            </span>
                        </label>
                        { comboSelected === "create" && (
                            <svg className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        )}
                    </div>

                    <div className="relative">
                        <input 
                            className="hidden group peer" 
                            type="radio" 
                            name="shippingOption" 
                            value="next_day_alt" 
                            id="next_day_alt"
                            defaultChecked={comboSelected === "join"} 
                            onClick={() => setComboSelected(comboSelected === "join" ? "" : "join")}
                        />

                        <label className={`duration-300 delay-100 block p-4 text-sm font-medium border border-gray-100 rounded-xl cursor-pointer transition-colors shadow-sm ${comboSelected === "join" && 'peer-checked:ring-1 peer-checked:border-blue-500 peer-checked:ring-blue-500'}`} htmlFor="next_day_alt">
                            <span className="font-semibold">Join an existing group</span>

                            <span className="block mt-1 text-xs text-gray-500">
                                Invitation code is required
                            </span>
                        </label>

                        { comboSelected === "join" && (
                            <svg className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="flex flex-row items-end justify-end px-10 h-10">
                    { comboSelected.length > 0 && (
                        <a className="inline-flex delay-100 shadow-xl shadow-blue-500/50 items-center px-5 py-2 text-white bg-blue-500 border border-blue-500 rounded-lg hover:bg-transparent hover:text-blue-500 active:text-blue-500 focus:outline-none focus:ring duration-300">
                            <span className="text-sm font-medium">
                                Continue
                            </span>

                            <svg className="w-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Intro;