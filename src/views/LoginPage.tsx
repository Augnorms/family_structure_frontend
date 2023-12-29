import { Loginpictorial } from "../component/reusables/nonformcomponent/Loginpictorial";
import LoginImage from "../assets/login-bg-2.jpg";
import Mamaa from "../assets/Mamaa2.jpg";
import { LoginContext } from "../contextApi/LoginPictorialContext";
import { loggedinInfoContext } from "../contextApi/LoggedInInforContext";
import { useContext, useEffect, useState } from "react";
import { LoginForm } from "../component/nonreusables/LoginForm";
import { LoginResetPassForm } from "../component/nonreusables/LoginResetPassForm";
import { LoginMessage } from "../component/reusables/nonformcomponent/LoginMessage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VerificationInput } from "../component/reusables/formcomponents/VerificationInput";
import { ButtonSpinner } from "../component/reusables/nonformcomponent/ButtonSpinner";


export const LoginPage = () => {

  const navigate = useNavigate();
  //use context used for managing components
  const {
    familyNames, username, password, forgotpass, keepmeloggedin,
    setUsername, setPassword, setforgotpass, setforgpttenPassword, 
    showresetform, setshowresetform, setveificationUserid
  } = useContext(LoginContext);

  //context state management
  const {setEmail, setToken, setLoggedid, setFirstname, setLastname, setIsadmin} = useContext(loggedinInfoContext);

  const[loading, setLoading] = useState<boolean>(false);
  const[emailloading, setEmailLoading] = useState<boolean>(false);
  const[showVerify, setShowverify] = useState<boolean>(false);
  const[resStatus, setResStatus] = useState<boolean>(false);
  const[resMessage, setResMessage] = useState<string>("");

  //verification state declaration
  const[varificationloading, setVarificationloading] = useState<boolean>(false);
  const[verifyStatus, setVerifystatus] = useState<string>("");
  const[numberone, setNumberone] = useState<string>("");
  const[numbertwo, setNumberotwo] = useState<string>("");
  const[numberthree, setNumberthree] = useState<string>("");
  const[numberfour, setNumberfour] = useState<string>("");
  const[numberfive, setNumberfive] = useState<string>("");

const handleverification = (event: React.ChangeEvent<HTMLInputElement>)=>{
   if(event.target.id === "firstnumber"){
      setNumberone(event.target.value);
  
   }else if(event.target.id === "secondnumber"){
      setNumberotwo(event.target.value);

   }else if(event.target.id === "thirdnumber"){
      setNumberthree(event.target.value);

   }else if(event.target.id === "forthnumber"){
      setNumberfour(event.target.value)
   
   }else if(event.target.id === "fifthnumber"){
      setNumberfive(event.target.value)
  
   }
}

//send verification
useEffect(()=>{
  const sendverification = async()=>{
    try{
      setVarificationloading(true); 
  
      const response = await axios.post("http://localhost:4000/verification", {
        verificationnumber: (numberone + numbertwo + numberthree + numberfour + numberfive)
      });
  
      if(response && response?.data?.code === 201){
        setShowverify(false);
        setNumberone("");
        setNumberotwo("");
        setNumberthree("");
        setNumberfour("");
        setNumberfive("");
        setVerifystatus("success")
        setTimeout(()=>{
          setVerifystatus("")
        }, 3000)
        setshowresetform(true);
        setveificationUserid(response?.data?.user_id);
      }
  
    }catch(error:any){
        console.error(error.response)
        setNumberone("");
        setNumberotwo("");
        setNumberthree("");
        setNumberfour("");
        setNumberfive("");
        setVerifystatus("failed")
        setTimeout(()=>{
          setVerifystatus("")
        }, 3000)
    }finally{
      setVarificationloading(false); 
    }
  }

if(numberone && numbertwo && numberthree && numberfour && numberfive){
   setTimeout(()=>{
     try{
      setVarificationloading(true);
      sendverification();
     }finally{
      setVarificationloading(false); 
     }
   }, 1000)
}

},[numberone, numbertwo, numberthree, numberfour, numberfive])

  

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:4000/login", {
        username: username,
        password: password,
        rememberMe: keepmeloggedin === "keep me loggedin" ? true : false
      });

      if (response && response.status === 201) {
        setResStatus(true);
        setResMessage(response?.data?.message);
        setUsername("");
        setPassword("");
        setToken(response?.data?.token);
        setEmail(response?.data?.data[0].email);
        setLoggedid(response?.data?.data[0].loginId);
        setFirstname(response?.data?.data[0].firstname);
        setLastname(response?.data?.data[0].lastname);
        setIsadmin(response?.data?.data[0].isadmin);
      
        
        setTimeout(() => {
          setResStatus(false);
          navigate("/dashboard");
        }, 5000);
      }
    } catch (error:any) {
      if (error.response && error.response.status === 401) {
        setResStatus(true);
        setResMessage(error.response?.data?.message);
        setUsername("");
        setPassword("");
      }
    } finally {
      setLoading(false);
    }
  };

  //close dialogue when loggin is unsuccessful
  useEffect(()=>{
    if(username){
      setResStatus(false);
    }
  },[username])


/*handle email submission*/
const handleEmail = async()=>{
  try{
    setEmailLoading(true);

   const response = await axios.post("http://localhost:4000/emailverification",{
    email:forgotpass
   });

    if(response && response?.data?.code === 201){
      setShowverify(true);
      setforgotpass("");
      setforgpttenPassword(false);
    }

  }catch(error:any){
    if(error.response && error.response.status === 401 || error.response.status === 500){
      console.error(error.response)
      setResMessage("Failed to submit email check your internet connection"); 
      setResStatus(true);
      setTimeout(()=>{setResStatus(false)}, 2000);
      setShowverify(false)
    }
  }finally{
    setEmailLoading(false);
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
             
             {varificationloading ? <div className="w-full p-2 flex justify-center">
                  {<ButtonSpinner />}
             </div> : <div></div>}

             {/*display messages */}
             {verifyStatus == "success" ? <div className="w-full p-2 flex justify-center">
                  <h4 className="p-2 text-emerald-500 font-bold border border-emerald-500 rounded">
                    Verification sucessfull
                  </h4>
             </div>
              :verifyStatus == "failed" ?
             <div className="w-full p-2 flex justify-center">
                  <h4 className="p-2 text-rose-600 font-bold border border-rose-600 rounded">
                    Verification Failed
                  </h4>
             </div> : <div></div>}

              <LoginMessage show={resStatus} label={resMessage}/>

              <VerificationInput 
                display={showVerify}
                onChange={handleverification}
                valueone={numberone}
                valuetwo={numbertwo}
                valuethree={numberthree}
                valuefour={numberfour}
                valuefive={numberfive}
              />

            <div className="flex mt-20 justify-center max-sm:col-span-1 md:col-span-1 p-2">
             {showresetform ?

              <LoginResetPassForm />

              :

              <LoginForm 
               onLogin={handleLogin} 
               onSubmitEmail={handleEmail}
               status={loading}
               emailStatus={emailloading}
               />
             }
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
               {familyNames === 'Dorothy Payne' ? `(${familyNames})` :  `Hello, I am (${familyNames}) a descendant of Dorothy Payne`}
              </p>

                <Loginpictorial /> 
              </div> 

          </div>
       </div>
    </div>
  )
}
