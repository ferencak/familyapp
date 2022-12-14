import { PrivateRouteEnum, PublicRouteEnum } from "enums/RouteEnum";
import type { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiArrowRight, HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import { IoIosReturnLeft } from "react-icons/io";
import wfh1 from "images/wfh_1.svg";
import { useStore } from "context/store.context";
import useApi from "hooks/useApi";
import LoadingContainer from "components/loading-container/LoadingContainer";
import { RoleEnum } from "enums/RoleEnum";
import useUser from "hooks/useUser";

const SignIn: NextPage = (): JSX.Element => {

    const { setStore, store } = useStore();
    const { saveUserData } = useUser();

    const router = useRouter();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [randomWelcomeMessage] = useState<string[]>([
        "Glad to see you here!"
    ]);
    const [randomWelcomeMessageIndex] = useState<number>(Math.floor(Math.random() * randomWelcomeMessage.length));
    const [isEmailValid, setIsEmailvalid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { call, response, loading, error } = useApi({
        url: "/auth/login",
        method: "POST",
    });

    const onSubmit = async () => {
        if(!checkEmailValidation(email)) return setIsEmailvalid(false);
        await call({
            email: email,
            password: password
        });
    };

    useEffect(() => {
        if(!response) return;
        setStore({
            ...store,
            tokens: {
                access: {
                    token: response.tokens.access.token,
                    expires: response.tokens.access.expires
                },
                refresh: {
                    token: response.tokens.refresh.token,
                    expires: response.tokens.refresh.expires
                },
                isAuthenticated: true
            }, 
            user: {
                id: response.user.id,
                name: response.user.name,
                email: response.user.email,
                role: RoleEnum[response.user.role],
                isEmailVerified: response.user.isEmailVerified, 
                groups: response.user.groups
            }
        });
        saveUserData(response.user);
        if(response.user.groups.length === 0) router.push(PrivateRouteEnum.Intro);
        else router.push(PrivateRouteEnum.Home);
    }, [response]);

    useEffect(
        () => {
            if(email.length === 0) return;
            const isValid = checkEmailValidation(email);
            if(isValid) return setIsEmailvalid(true);
            return setIsEmailvalid(false);
        }, [email]
    );

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
            <LoadingContainer loading={loading}>
                <>
                    <div className="w-full flex flex-col gap-10">
                        <div className="flex flex-col justify-center items-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                            <h1>{ randomWelcomeMessage[randomWelcomeMessageIndex] }</h1>
                        </div>
                        <div className="flex flex-col h-full items-start justify-center text-gray-600 text-sm pl-5 pr-5 gap-2">
                            { error && (
                                <div className="flex flex-row justify-center items-center w-full">
                                    <div className="flex flex-row items-center w-full rounded-xl bg-red-50 text-red-500 p-2 pl-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 text-red-dark mr-4 fill-red-500"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path></svg>
                                        <div>
                                            <h1 className="font-bold">Ouch!</h1>
                                            <p>{ error.data.message }</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="relative w-full">
                                <input
                                    className={`w-full py-3 pl-3 pr-12 text-sm border-1 border-gray-200 rounded-xl ${!isEmailValid && "border-red-500/50"}`}
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    defaultValue={email}
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
                                    defaultValue={password}
                                    onChange={(e: any) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setPassword(e.target.value)
                                    }}
                                />

                                <span className="absolute text-gray-500 !z-50 -translate-y-1/2 top-1/2 right-4 hover:text-black duration-300">
                                    { !passwordVisibility ? <HiEyeOff className="z-10" onClick={() => setPasswordVisibility(true)} /> : <HiEye onClick={() => setPasswordVisibility(false)} /> }
                                </span>
                            </div>
                            <span className="text-gray-400 text-xs">Reset my password</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <div className="inline-flex justify-center gap-2 items-center text-md -space-x-px rounded-xl border-[#f4f4f4] border-solid border-1 py-1 px-1 w-57">
                            <button
                                className="flex gap-3 w-full delay-100 shadow-xl shadow-blue-500/50 items-center justify-center px-5 py-2 text-white bg-blue-500 border border-blue-500 rounded-lg active:text-blue-500 focus:outline-none focus:ring duration-300"
                                type="button"
                                onClick={() => onSubmit()}
                            >
                                Sign In
                                <HiArrowRight />
                            </button>
                        </div>
                        <p className="flex flex-row gap-1 items-center justify-center text-sm text-center text-gray-400">
                            No account?
                            <a className="underline" onClick={() => router.push(PublicRouteEnum.SignUp)}>Sign up</a>
                        </p>
                    </div>
                </>
            </LoadingContainer>
        </div>
    );
};

export default SignIn;