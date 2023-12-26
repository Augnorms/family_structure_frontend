import { Loginpictorial } from "../component/reusables/nonformcomponent/Loginpictorial";
import LoginImage from "../assets/login-bg-2.jpg";
import Mamaa from "../assets/Mamaa2.jpg";
import { LoginContext } from "../contextApi/LoginPictorialContext";
import { useContext, useEffect, useState } from "react";
import { LoginForm } from "../component/nonreusables/LoginForm";
import { LoginMessage } from "../component/reusables/nonformcomponent/LoginMessage";
import axios from "axios";

export const LoginPage = () => {

  //use context used for managing components
  const {familyNames, username, password, forgotpass, keepmeloggedin} = useContext(LoginContext);
  const[loading, setLoading] = useState<boolean>(false);
  const[resStatus, setResStatus] = useState<boolean>(false);
  const[resMessage, setResMessage] = useState<string>("");

  const handleLogin = async()=>{
    try{
     setLoading(true);

     const response = await axios.post("http://localhost:4000/login", {
      username: username,
      password: password,
    });

    if(response && response.status === 201){
      setResStatus(true);
      setResMessage(response?.data?.message);
    }

    }catch(error:any){
      if(error.response && error.response.status === 401){
        setResStatus(true);
        setResMessage(error.response?.data?.message);
      }
    }finally{
      setLoading(false);
    }
  }

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
        
          <div className="">

              <LoginMessage show={resStatus} label={resMessage}/>

            <div className="flex mt-20 justify-center max-sm:col-span-1 md:col-span-1 p-2">

              <LoginForm 
               onLogin={handleLogin} 
               status={loading}
               />

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
