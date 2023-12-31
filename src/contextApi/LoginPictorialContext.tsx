import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface LoginContextProps {
  familyNames: string;
  setfamilyNames: Dispatch<SetStateAction<string>>;
  username:string;
  setUsername:Dispatch<SetStateAction<string>>;
  password:string;
  setPassword:Dispatch<SetStateAction<string>>;
  forgotpass:string;
  setforgotpass:Dispatch<SetStateAction<string>>;
  keepmeloggedin:string;
  setkeepmeloggedin:Dispatch<SetStateAction<string>>;
  forgpttenPassword:boolean;
  setforgpttenPassword:Dispatch<SetStateAction<boolean>>;
  showresetform:boolean;
  setshowresetform:Dispatch<SetStateAction<boolean>>;
  veificationUserid:number,
  setveificationUserid:Dispatch<SetStateAction<number>>
}

interface LoginContextProviderProps {
  children: ReactNode;
}

//always use this at the various components?
export const LoginContext = createContext<LoginContextProps>({
    familyNames: "",
    setfamilyNames: ()=>{},
    username:"",
    setUsername:()=>{},
    password:"",
    setPassword:()=>{},
    forgotpass:"",
    setforgotpass:()=>{},
    keepmeloggedin:"",
    setkeepmeloggedin:()=>{},
    forgpttenPassword:false,
    setforgpttenPassword:()=>{},
    showresetform:false,
    setshowresetform:()=>{},
    veificationUserid:0,
    setveificationUserid:()=>{},
});


//always set this at the central point like mainroutes
//context provider should start with capital letter
export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const[familyNames, setfamilyNames] = useState<string>("");
  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const[forgotpass, setforgotpass] = useState<string>("");
  const[keepmeloggedin, setkeepmeloggedin] = useState<string>("");
  const[forgpttenPassword, setforgpttenPassword] = useState<boolean>(false);
  const[showresetform, setshowresetform] = useState<boolean>(false);
  const[veificationUserid, setveificationUserid] = useState<number>(0);

  return (
    <LoginContext.Provider value={
        { familyNames, setfamilyNames, username, setUsername, 
          password, setPassword, forgotpass, setforgotpass,
          keepmeloggedin, setkeepmeloggedin, forgpttenPassword, 
          setforgpttenPassword, showresetform, setshowresetform,
          veificationUserid, setveificationUserid
        }
      }>
      {children}
    </LoginContext.Provider>
  );
}
