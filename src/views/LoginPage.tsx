import { Loginpictorial } from "../component/reusables/nonformcomponent/Loginpictorial";
import LoginImage from "../assets/login-bg-2.jpg";
import Mamaa from "../assets/Mamaa2.jpg";
import { LoginContext } from "../contextApi/LoginPictorialContext";
import { useContext } from "react";
import { Inputs } from "../component/reusables/formcomponents/Inputs";
import { CheckBox } from "../component/reusables/formcomponents/CheckBox";
import { Button } from "../component/reusables/formcomponents/Button";

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

             <div className="p-2 max-sm:w-[100%] sm:w-full md:w-4/5 xl:w-[60%] shadow-md rounded-md border-t-[4px] border-t-cyan-300">
               
                <div className="w-full flex justify-center relative bottom-12 z-2 mb-[-35px]">
                   <div className="w-20 h-20 rounded-full shadow-md bg-white flex justify-center items-center border-t-[4px] border-t-cyan-300">
                      {/*iamge goes here*/}
                   </div>
                </div>

                <div className="w-full p-2 text-center underline">
                   <p className="text-lg font-bold">Login Here</p> 
                </div>

                <div className="w-full p-2">
                  <Inputs 
                   type="text"
                   style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                   labelOne="Username"
                   useIcons
                   iconUser
                   placeholder="Enter username here..."
                  /> 
                </div>

                <div className="w-full p-2">
                  <Inputs 
                   type="text"
                   style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                   labelOne="Password"
                   useIcons
                   iconUserPass
                   placeholder="Enter password here..."
                   addpasswordVisibility
                  /> 
                </div>

                <div className="w-full p-2">
                    <CheckBox 
                      style='
                       focus:ring-[#F2BEAB] 
                       accent-cyan-300
                       md:accent-cyan-300
                       focus:accent-cyan-300
                       cursor-pointer
                      '
                      label="Keep me logged in"
                      labelStyle="font-bold"
                     />
                </div>

                <div className="w-full p-2">
                  <Button 
                    label="Login"
                    styles="bg-cyan-300 p-2 w-full 
                     text-white rounded
                     flex justify-center 
                    "
                  />
                </div>
                 
             </div>

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
