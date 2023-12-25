import { Loginpictorial } from "../component/reusables/nonformcomponent/Loginpictorial";
import LoginImage from "../assets/login-bg-2.jpg";
import Mamaa from "../assets/Mamaa2.jpg";
import { LoginContext } from "../contextApi/LoginPictorialContext";
import { useContext, useState } from "react";
import { LoginForm } from "../component/nonreusables/LoginForm";

export const LoginPage = () => {

  //use context used for managing components
  const {familyNames} = useContext(LoginContext);

  return (
    <div className="w-full h-screen">
       <div className="w-full p-2 flex gap-2">
         <div className="w-10 h-10 rounded-full shadow-md shadow-md flex justify-center items-center">
           <img src={Mamaa} className="w-10 h-10 object-fill rounded-full" alt={`Image ${Mamaa}`} /> 
         </div>

         <div className="w-full text-center bg-cyan-600 p-1 text-white">
           <p className="text-lg">Welcome to Dorothy Payne family structure</p>
         </div>
       </div> 

       <div className="max-sm:h-screen xl:h-[90vh] p-2 grid max-sm:grid-cols-1 xl:grid-cols-2 ">
          <div className="flex justify-center items-center max-sm:col-span-1 md:col-span-1 p-2">

             <LoginForm />

          </div>

          <div 
            className={`
            flex
            justify-center
            items-center 
            max-sm:hidden
            md:p-10
            `}
            style={{ backgroundImage: `url(${LoginImage})` }}
            >
              <div className="md:w-full text-center text-white">
              <p className={familyNames === 'Dorothy Payne' ? 'p-2 bg-white text-rose-500 font-bold rounded border-t-[4px] border-t-rose-500' 
              : 'p-2 bg-white text-cyan-500 font-bold rounded border-t-[4px] border-t-cyan-300'}>
               {`Hello, I am ${familyNames}`}
              </p>

                <Loginpictorial /> 
              </div> 

          </div>
       </div>
    </div>
  )
}
