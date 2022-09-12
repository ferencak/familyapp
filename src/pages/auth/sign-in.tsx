import { PublicRouteEnum } from "enums/RouteEnum";
import type { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight, HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import wfh1 from "images/wfh_1.svg";

const SignIn: NextPage = (): JSX.Element => {

    const router = useRouter();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [randomWelcomeMessage] = useState<string[]>([
        "Glad to see you here!"
    ]);
    const [randomWelcomeMessageIndex] = useState<number>(Math.floor(Math.random() * randomWelcomeMessage.length));
    const [isEmailValid, setIsEmailvalid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");

    const onSubmit = () => {
        if(checkEmailValidation(email)) return setIsEmailvalid(false);
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
        <div className="flex flex-col justify-between p-5 pb-20 gap-10 h-full">
            <div className="flex flex-col h-full gap-15">
                <HiArrowLeft 
                    className="absolute text-2xl left-10 top-10 text-white"
                    onClick={() => router.push(PublicRouteEnum.Crossroad)}
                />
                <Image src={wfh1} alt="Welcome" className="bg-[#ffdacb] rounded-3xl h-50%" />
                <div className="flex flex-col h-fit gap-10">
                    <div className="flex flex-col justify-center items-center font-bold text-3xl">
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
            </div>
            <div className="flex flex-row justify-center">
                <div className="inline-flex justify-center gap-2 items-center text-md -space-x-px rounded-xl border-[#f4f4f4] border-solid border-1 py-1 px-1 w-57">
                    <button
                        className="flex flex-row justify-center items-center gap-2 pl-10 px-6 py-3 font-light hover:z-10 bg-[#f1a485] text-white focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-black duration-300 active:opacity-75 rounded-xl w-full"
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