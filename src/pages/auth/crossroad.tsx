import type { NextPage } from 'next';
import { useState } from "react";

import wfh1 from "images/wfh_1.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { PublicRouteEnum } from "enums/RouteEnum";

const CrossRoad: NextPage = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center px-5 w-full h-full items-center -mt-5 gap-10">
            <div className="w-70% -mb-5 flex flex-row justify-center">
                <Image src={wfh1} alt="Welcome" />
            </div>
            <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-center items-center font-bold text-3xl">
                        <h1>Manage your family</h1>
                        <h1>in one place</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center text-gray-600 text-sm">
                        <span className="font-extralight">Explore all the most interestings blogs</span>
                        <span className="font-extralight">based on Your interests</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 px-10 -mb-5">
                <div className="inline-flex justify-center gap-2 items-center text-md -space-x-px rounded-xl border-[#f4f4f4] border-solid border-1 py-1 px-1">
                    <button
                        className="px-6 py-3 font-light rounded-xl bg-white hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
                        type="button"
                        onClick={() => router.push(PublicRouteEnum.SignUp)}
                    >
                        Sign Up
                    </button>

                    <button
                        className="px-6 py-3 font-light hover:z-10 bg-blue-500 text-white focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-black duration-300 active:opacity-75 rounded-xl"
                        type="button"
                        onClick={() => router.push(PublicRouteEnum.SignIn)}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CrossRoad;