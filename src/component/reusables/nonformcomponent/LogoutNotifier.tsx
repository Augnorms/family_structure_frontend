import { CiLogout } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { formatTime } from "../../../HelperFunction/functions";
import { Button } from "../formcomponents/Button";
import { loggedinInfoContext } from "../../../contextApi/LoggedInInforContext";

export const LogoutNotifier = () => {
    
    const {setNotify} = useContext(loggedinInfoContext);

    const [countdown, setCountdown] = useState(5 * 60); // Initial countdown time in seconds

    useEffect(() => {
      // Update the countdown every second
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      // Clear the interval when the component is unmounted or countdown reaches 0
      return () => clearInterval(countdownInterval);
    }, []);
  
  
   const handleCloseDialog = ()=>{
      setNotify(false);
   };


  return (
    <div className='w-full h-screen bg-transparent absolute top-0 z-10 flex justify-center items-center'>
         <div className='
           max-sm:w-[80%] 
           sm:w-[80%] 
           md:w-[50%] 
           lg:w-[20%]
           p-2 
           border-2
           border-t-cyan-300 
           rounded
           bg-white
           shadow-md
        '>
            <div className='w-full p-2 shadow-md flex gap-24'>
              <div className="mt-1"><CiLogout size={20}/></div>
              <p className="text-cyan-400">Logout Alert</p>
            </div>
            <div className="w-full p-2 shadow-md text-center">
               You are about to be logged out within <br/>
               {formatTime(countdown)}
            </div>
            <div className="w-full p-2 shadow-md">
               <Button 
                 label="close"
                 styles="bg-cyan-300 p-2 w-full 
                     text-white rounded
                     flex justify-center 
                    "
                 onSubmit={handleCloseDialog}
               />
            </div>
         </div>
    </div>
  )
}
