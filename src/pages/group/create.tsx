import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import CreateImage from "images/Intro-image.svg";
import Image from "next/image";
import { HiOutlineUserGroup, HiOutlineLogout, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { PrivateRouteEnum, PublicRouteEnum } from "enums/RouteEnum";
import useApi from "hooks/useApi";
import { useStore } from "context/store.context";
import useUser from "hooks/useUser";
import { RiArrowLeftLine } from "react-icons/ri";
import { RoleEnum } from "enums/RoleEnum";

const Create: NextPage = (): JSX.Element => {
    const router = useRouter();
    const [groupName, setGroupName] = useState<string>("");

    const { store, setStore } = useStore();
    const { logOut, saveUserData } = useUser();

    const { call, response, error } = useApi(
        {
            url: "/group/create",
            method: "POST",
            withToken: true,
        }
    );

    useEffect(
        () => {
            if(!response) return;
            setStore({
                ...store, 
                user: {
                    id: response.id,
                    name: response.name,
                    email: response.email,
                    role: RoleEnum[response.role],
                    isEmailVerified: response.isEmailVerified, 
                    groups: response.groups
                }
            });
            saveUserData(response);

            router.push(PrivateRouteEnum.Welcome);
        }, [response]
    )

    return (
        <div className="flex flex-col justify-center px-5 w-full h-full items-center -mt-5 gap-10">
            <div className="w-70% -mb-5 flex flex-row justify-center">
                <div className="flex flex-row gap-5 absolute text-2xl right-10 top-10 items-center">
                    <HiOutlineLogout 
                        className="text-blue-200 hover:text-blue-500 duration-300"
                        onClick={() => logOut()}
                    />
                </div>
                <div className="flex flex-row gap-5 absolute text-2xl left-10 top-10 items-center">
                    <HiArrowLeft 
                        className="text-blue-200 hover:text-blue-500 duration-300"
                        onClick={() => router.back()}
                    />
                </div>
                <Image src={CreateImage} alt="Create" />
            </div>
            <div className="w-full flex flex-col gap-10">
                <div>
                    <h1 
                        className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"
                    >
                        Create a family group
                    </h1>
                </div>
                <div className="flex flex-col gap-3 px-10 -mb-5">
                    <div className="relative w-full">
                        <input
                            className={`w-full py-3 pl-3 pr-12 text-sm border-1 border-gray-200 rounded-xl ${groupName.length < 8 && "outline-red-500"}`}
                            id="groupName"
                            type="text"
                            placeholder="Your group name"
                            defaultValue={groupName}
                            onChange={(e: any) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setGroupName(e.target.value)
                            }}
                        />

                        <span className="absolute text-gray-500 pointer-events-none -translate-y-1/2 top-1/2 right-4">
                            <HiOutlineUserGroup />
                        </span>
                    </div>
                </div>
                <div className="flex flex-row items-end justify-end px-10 h-10">
                    { groupName.length >= 8 && (
                        <a 
                            className="inline-flex delay-100 shadow-xl shadow-blue-500/50 items-center px-5 py-2 text-white bg-blue-500 border border-blue-500 rounded-lg hover:bg-transparent hover:text-blue-500 active:text-blue-500 focus:outline-none focus:ring duration-300"
                            onClick={() => {
                                call({
                                    name: groupName,
                                    ownerId: store.user.id
                                });
                            }}
                        >
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

export default Create;