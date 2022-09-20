import { useStore } from "context/store.context";
import { PrivateRouteEnum } from "enums/RouteEnum";
import type { NextPage } from 'next';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Confetti from "react-confetti";

const Welcome: NextPage = (): JSX.Element => {
    const router = useRouter();
    const { store } = useStore();

    useEffect(
        () => {
            const interval = setInterval(() => {
                router.push(PrivateRouteEnum.Home);
            }, 3000);
            return () => clearInterval(interval);
        }, []
    )

    return (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
        <Confetti
            gravity={0.3}
            numberOfPieces={50}
        >
            <div className="w-full h-full flex items-center justify-center z-10 absolute">
                <div className="flex flex-col justify-center w-full items-center">
                    <div className="flex font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                        <h1>Welcome { store.user.name.split(' ')[0] }!</h1>
                    </div>
                    <div className="flex font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                        <h1>We are happy to see you</h1>
                    </div>
                </div>
            </div>
        </Confetti>
        </div>
    );
};

export default Welcome;