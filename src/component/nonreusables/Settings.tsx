import { useContext, useEffect, useState } from "react"
import {loggedinInfoContext} from "../../contextApi/LoggedInInforContext";
import { formatTime } from "../../HelperFunction/functions";

export const Settings = () => {

const {tokenExp} = useContext(loggedinInfoContext);

const [countdown, setCountdown] = useState<number>(0);

useEffect(() => {
  let intervalId: number;

  if (tokenExp > 0) {
    setCountdown(Math.floor(tokenExp / 1000));

    intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
  }

  return () => {
    clearInterval(intervalId);
  };
}, [tokenExp]);

  return (
    <div className='w-full h-screen p-2 overflow-auto'>

        <div className="w-full p-2 flex border">
            <div className="w-1/2 ">
                settings{}
            </div>
            <div className="w-1/2 flex justify-end">
              <p><span className="font-bold">LoggedIn Time:</span> <span className="text-cyan-500 font-bold">{" "+formatTime(countdown)}</span></p>
            </div>
        </div>

        <div className="w-full h-[40vh] mt-5 p-2 border">

        </div>

        <div className="w-full h-[40vh] mt-5 p-2 border">

        </div>
        
    </div>
  )
}
