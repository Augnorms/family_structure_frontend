import { useContext, useEffect, useState } from "react"
import {loggedinInfoContext} from "../../contextApi/LoggedInInforContext";
import { formatTime } from "../../HelperFunction/functions";


export const Settings = () => {

const {tokenExp, setNotify} = useContext(loggedinInfoContext);

const [countdown, setCountdown] = useState<number>(0);


useEffect(() => {
  let intervalId: number;

  if (tokenExp > 0) {
    setCountdown(Math.floor(tokenExp / 1000));

    intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;

        // Check if the remaining time is 5 minutes or less (300 seconds)
        if (newCountdown == 300) {
          // Use a callback function to setNotify to avoid the render phase error
          setNotify((prevNotify) => {
            if (!prevNotify) {
              return true;
            }
            return prevNotify;
          });
        }

        return newCountdown;
      });
    }, 1000);
  }

  // Cleanup function
  return () => {
    clearInterval(intervalId);
  };
}, [tokenExp, setNotify]);


  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

        <div className="w-full p-2 flex border">
            <div className="w-1/2 ">
                settings
            </div>
            <div className="w-1/2 flex justify-between">
              <div></div>
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
