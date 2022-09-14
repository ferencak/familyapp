import { PrivateRouteEnum, PublicRouteEnum } from "enums/RouteEnum";
import type { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight, HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import { IoIosReturnLeft } from "react-icons/io";
import wfh1 from "images/wfh_1.svg";
import { useStore } from "context/store.context";

const SignIn: NextPage = (): JSX.Element => {

    const { setStore, store } = useStore();

    const router = useRouter();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [randomWelcomeMessage] = useState<string[]>([
        "Glad to see you here!"
    ]);
    const [randomWelcomeMessageIndex] = useState<number>(Math.floor(Math.random() * randomWelcomeMessage.length));
    const [isEmailValid, setIsEmailvalid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");

    const onSubmit = () => {
        if(!checkEmailValidation(email)) return setIsEmailvalid(false);

        setStore({
            ...store,
            authorization: {
                ...store.authorization, 
                isAuthenticated: true
            }
        });

        router.push(PrivateRouteEnum.Intro);
    };

    useEffect(
        () => {
            if(email.length === 0) return;
            const isValid = checkEmailValidation(email);
            if(isValid) return setIsEmailvalid(true);
            return setIsEmailvalid(false);
        }, [email]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkEmailValidation = (email: string) => {
        const emailValidation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(emailValidation) return true;
        return false;
    }

    return (
        <div className="flex flex-col justify-center px-5 w-full h-full items-center -mt-5 gap-10">
            <div className="w-70% -mb-5 flex flex-row justify-center">
                <IoIosReturnLeft 
                    className="absolute text-2xl left-10 top-10 text-blue-200 hover:text-blue-500 duration-300"
                    onClick={() => router.push(PublicRouteEnum.Crossroad)}
                />
                <Image src={wfh1} alt="Welcome" className="h-50%" />
            </div>
            <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col justify-center items-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                    <h1>{ randomWelcomeMessage[randomWelcomeMessageIndex] }</h1>
                </div>
                <div className="flex flex-col h-full items-start justify-center text-gray-600 text-sm pl-5 pr-5 gap-2">
                    <div className="relative w-full">
                        <input
                            className={`w-full py-3 pl-3 pr-12 text-sm border-1 border-gray-200 rounded-xl ${!isEmailValid && "outline-red-500"}`}
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={(e: any) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setEmail(e.target.value)
                            }}
                        />

                        <span className="absolute text-gray-500 pointer-events-none -translate-y-1/2 top-1/2 right-4">
                            <HiAtSymbol />
                        </span>
                    </div>
                    <div className="relative w-full">
                        <input
                            className="w-full py-3 pl-3 pr-12 text-sm border-1 border-gray-200 rounded-xl"
                            id="password"
                            type={ passwordVisibility ? "text" : "password" }
                            placeholder="Password"
                        />

                        <span className="absolute text-gray-500 !z-50 -translate-y-1/2 top-1/2 right-4 hover:text-black duration-300">
                            { !passwordVisibility ? <HiEyeOff className="z-10" onClick={() => setPasswordVisibility(true)} /> : <HiEye onClick={() => setPasswordVisibility(false)} /> }
                        </span>
                    </div>
                    <span className="text-gray-400 text-xs">Reset my password</span>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="inline-flex justify-center gap-2 items-center text-md -space-x-px rounded-xl border-[#f4f4f4] border-solid border-1 py-1 px-1 w-57">
                    <button
                        className="flex gap-3 w-full delay-100 shadow-xl shadow-blue-500/50 items-center justify-center px-5 py-2 text-white bg-blue-500 border border-blue-500 rounded-lg hover:bg-transparent hover:text-blue-500 active:text-blue-500 focus:outline-none focus:ring duration-300"
                        type="button"
                        onClick={() => onSubmit()}
                    >
                        Sign In
                        <HiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;