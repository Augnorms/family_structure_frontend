import { Inputs } from "../../component/reusables/formcomponents/Inputs";
import { CheckBox } from "../../component/reusables/formcomponents/CheckBox";
import { Button } from "../../component/reusables/formcomponents/Button";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { LoginContext } from "../../contextApi/LoginPictorialContext";
import { useContext } from "react";

interface Props{
  onLogin?:()=>void;
  onSubmitEmail?:()=>void;
  status?:boolean;
  emailStatus?:boolean;
}

export const LoginForm = (props:Props) => {

    const {
       username, setUsername, password, setPassword,
       forgotpass, setforgotpass, setkeepmeloggedin,
       forgpttenPassword, setforgpttenPassword
      } = useContext(LoginContext);

    //declare state variables here
    const[showOrClosePass, setshowOrClosePass] = useState<boolean>(false);


    const handleForgottenPassword = ()=>{
      setforgpttenPassword(!forgpttenPassword);
    };

    const handleInputFields = (event:React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.id === "username"){
           setUsername(event.target.value);
        
        }else if(event.target.id === "password"){
          setPassword(event.target.value);
        
        }else if(event.target.id === "forgottenpass"){
            setforgotpass(event.target.value);
     
        }
    };

    const handleKeepmeloggedin = (event:React.ChangeEvent<HTMLInputElement>)=>{
      const isChecked = event.target.checked
  
       if(isChecked)setkeepmeloggedin(event.target.id);
       else setkeepmeloggedin("");
    };

    const handlePass = ()=>{   
      setshowOrClosePass(!showOrClosePass);
    }

  return (
         <div className="p-2 max-sm:w-[100%] sm:w-full md:w-4/5 xl:w-[60%] shadow-md rounded-md border-t-[4px] border-t-cyan-300">
               
                <div className="w-full flex justify-center relative bottom-12 z-2 mb-[-35px]">
                   <div className="w-20 h-20 rounded-full shadow-md bg-white flex justify-center items-center border-t-[4px] border-t-cyan-300">
                      {/*iamge goes here*/}
                      <FaUser size={40}/>
                   </div>
                </div>

                <div className="w-full p-2 text-center underline">
                   <p className="text-lg font-bold">Login Here</p> 
                </div>

                <div className="w-full p-2">
                  <Inputs 
                   type="text"
                   id="username"
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
                   value={username}
                   onChange={handleInputFields}
                  /> 
                </div>

                <div className="w-full p-2">
                  <Inputs 
                   type={!showOrClosePass ? "password" : "text"}
                   id="password"
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
                   showPaswword={showOrClosePass}
                   value={password}
                   onChange={handleInputFields}
                   onShowpass={handlePass}
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
                      fieldid="keep me loggedin"
                      onSelect={handleKeepmeloggedin}
                     />
                </div>

                <div className="w-full p-2">
                  <Button 
                    label="Login"
                    styles="bg-cyan-300 p-2 w-full 
                     text-white rounded
                     flex justify-center 
                    "
                    disabled={password == '' || username == ''}
                    onSubmit={props.onLogin}
                    loading={props.status}
                  />
                </div>

                <div className="w-full p-2">
                  <p className="underline text-cyan-500 cursor-pointer" onClick={handleForgottenPassword}>
                    Forgotten your password?
                  </p>
                </div>

                <div className={forgpttenPassword ? "w-full gap-1 p-2 flex" : "hidden"}>
                   <div className="w-[70%]">
                     <Inputs 
                       type="text"
                       id="forgottenpass"
                       style='
                        w-full border border-cyan-300
                        pl-10 p-2.5
                        hover:border-cyan-300
                        rounded-lg focus:outline-cyan-300 
                        focus:ring-3 focus:border-cyan-300 
                        txt-field-style peer text-gray-900 
                        text-sm block  dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                        placeholder="Enter phone email here.."
                        value={forgotpass}
                        onChange={handleInputFields}
                        labelOne="Email"
                     />
                   </div>

                   <div className="w-[30%] flex items-end">
                    <Button 
                      label="Submit"
                      styles="bg-cyan-300 p-2 w-full 
                      text-white rounded
                      flex justify-center 
                      "
                      disabled={
                        forgotpass=="" ||
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotpass)
                      }
                      onSubmit={props.onSubmitEmail}
                      loading={props.emailStatus}
                    />
                   </div>
                </div>
                 
        </div>
  )
}
