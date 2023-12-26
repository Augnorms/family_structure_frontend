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
    setkeepmeloggedin:()=>{}
});


//always set this at the central point like mainroutes
export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const[familyNames, setfamilyNames] = useState<string>("");
  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const[forgotpass, setforgotpass] = useState<string>("");
  const[keepmeloggedin, setkeepmeloggedin] = useState<string>("");

  return (
    <LoginContext.Provider value={
        { familyNames, setfamilyNames, username, setUsername, 
          password, setPassword, forgotpass, setforgotpass,
          keepmeloggedin, setkeepmeloggedin 
        }
      }>
      {children}
    </LoginContext.Provider>
  );
}
