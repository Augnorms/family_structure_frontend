import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contextApi/LoginPictorialContext";
import { Inputs } from "../reusables/formcomponents/Inputs";
import { Button } from "../reusables/formcomponents/Button";
import axios from "axios";

export const LoginResetPassForm = () => {
//context state management
 const {setshowresetform, veificationUserid} = useContext(LoginContext);   


 const[showNewPass, setshowNewPass] = useState<boolean>(false);
 const[showRepeatPass, setshowRepeatPas] = useState<boolean>(false);
 const[resetStatus, setResetStatus] = useState<string>("");

 const[newpassword, setNewPassword] = useState<string>("");
 const[repeatpassword, setRepeatPassword] = useState<string>("");
 const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);


 const handleInputPasswords = (event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.id === "newpassword"){
       setNewPassword(event.target.value);
       setResetStatus("");
    }else if(event.target.id === "repeatpassword"){
       setRepeatPassword(event.target.value);
    }
  };

  //handling show or close passwords
 const handlenewpass = ()=>{
    setshowNewPass(!showNewPass);
 }

 const handlerepeatpass = ()=>{
    setshowRepeatPas(!showRepeatPass);
 }

 useEffect(() => {
    // Check if passwords match when either newPassword or repeatPassword changes
    if (newpassword.length > 0 && newpassword === repeatpassword) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
  }, [newpassword, repeatpassword]);

  const[loading, setloading]= useState<boolean>(false);

  const handleresetpassword = async()=>{
    try{
        setloading(true);
      const response = await axios.put(import.meta.env.VITE_RESETPASSWORD,{
        password:repeatpassword,
        id:veificationUserid
      })

      if(response?.data?.status === true){
        setNewPassword("");
        setRepeatPassword("");
        setPasswordMatch(null);
        setResetStatus("success");
        setTimeout(()=>{
            setshowresetform(false);
        },3000)
      }

    }catch(error:any){
     if(error.response || error.response.status === 500){
        console.error(error);
        setNewPassword("");
        setRepeatPassword("");
        setPasswordMatch(null);
        setResetStatus("failed");
     }

    }finally{
        setloading(false);
    }
  }

  return (
    <div className="p-2 max-sm:w-[100%] sm:w-full md:w-4/5 xl:w-[60%] shadow-md rounded-md border-t-[4px] border-t-cyan-300">
           {resetStatus == "success" ? <div className="w-full p-2 flex justify-center">
                  <h4 className="p-2 text-emerald-500 font-bold border border-emerald-500 rounded">
                    Reset sucessfull
                  </h4>
             </div>
              :resetStatus == "failed" ?
             <div className="w-full p-2 flex justify-center">
                  <h4 className="p-2 text-rose-600 font-bold border border-rose-600 rounded">
                    Reset Failed
                  </h4>
             </div> : <div></div>}

         <div className="w-full p-2 text-center underline mt-5">
             <p className="text-lg font-bold">Reset Password Here</p> 
         </div>

         <div className="w-full p-2">
              <Inputs 
                type={!showNewPass ? "password" : "text"}
                id="newpassword"
                style='
                        w-full border border-cyan-300
                        pl-10 p-2.5
                        hover:border-cyan-300
                        rounded-lg focus:outline-cyan-300 
                        focus:ring-3 focus:border-cyan-300 
                        txt-field-style peer text-gray-900 
                        text-sm block  dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                labelOne="New Password"
                useIcons
                iconUserPass
                placeholder="Enter new password here..."
                addpasswordVisibility
                showPaswword={showNewPass}
                value={newpassword}
                onChange={handleInputPasswords}
                onShowpass={handlenewpass}
              /> 
         </div>

         <div className="w-full p-2">
              <Inputs 
                type={!showRepeatPass ? "password" : "text"}
                id="repeatpassword"
                style='
                        w-full border border-cyan-300
                        pl-10 p-2.5
                        hover:border-cyan-300
                        rounded-lg focus:outline-cyan-300 
                        focus:ring-3 focus:border-cyan-300 
                        txt-field-style peer text-gray-900 
                        text-sm block  dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                labelOne="Repeat Password"
                useIcons
                iconUserPass
                placeholder="Enter repeat password here..."
                addpasswordVisibility
                showPaswword={showRepeatPass}
                value={repeatpassword}
                onChange={handleInputPasswords}
                onShowpass={handlerepeatpass}
              /> 
         </div>

         <div className="w-full flex justify-end pr-4">
         {passwordMatch === true && (
             <div className="w-[80%] p-1 text-center border rounded-lg bg-emerald-400">
                <p className="text-white">Passwords match</p>
             </div>
            )}

            {(passwordMatch === false || newpassword.length === 0) && (
                <>
                    {newpassword.length === 0 ? (
                        <p className="text-white"></p>
                    ) : (
                        <div className="w-[80%] p-1 text-center border rounded-lg bg-rose-600">  
                           <p className="text-white">Passwords do not match</p>
                        </div>
                    )}
                </>
            )}
         </div>
         
         <div className="w-[100%] flex items-end p-2 mb-3">
           <Button 
             styles="bg-cyan-300 p-2 w-full 
             text-white rounded
             flex justify-center 
             "
             label="reset password"
             disabled={newpassword=='' || repeatpassword==''}
             loading={loading}
             onSubmit={handleresetpassword}
           />
         </div>

    </div>
  )
}
