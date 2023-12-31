// contextApi/DasboardstatesContext

import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface DashboardInterfaceProp {
  dialogue: string;
  setDialogue: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername:Dispatch<SetStateAction<string>>;
  firstname:string;
  setFirstname:Dispatch<SetStateAction<string>>;
  lastname:string;
  setLastname:Dispatch<SetStateAction<string>>;
  password:string;
  setPassword:Dispatch<SetStateAction<string>>;
  resetpass:string;
  setResetpass:Dispatch<SetStateAction<string>>;
  email:string;
  setEmail:Dispatch<SetStateAction<string>>;
  admin:string;
  setAdmin:Dispatch<SetStateAction<string>>;
  editmode:boolean;
  seteditMode:Dispatch<SetStateAction<boolean>>;
}

interface DashboardContextProviderProps {
  children: ReactNode;
}

export const dashboardContext = createContext<DashboardInterfaceProp>({
  dialogue: "",
  setDialogue: () => {},
  username:"",
  setUsername:()=>{},
  firstname: "",
  setFirstname: () => {},
  lastname: "",
  setLastname: () => {},
  password: "",
  setPassword: () => {},
  resetpass: "",
  setResetpass: () => {},
  email: "",
  setEmail:()=>{},
  admin: "",
  setAdmin: () => {},
  editmode:false,
  seteditMode:()=>{}
});

//context provider should start with capital letter
export function DashboardContextProvider({ children }: DashboardContextProviderProps) {
  const [dialogue, setDialogue] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [resetpass, setResetpass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [admin, setAdmin] = useState<string>("");
  const [editmode, seteditMode] = useState<boolean>(false);

  return (
    <dashboardContext.Provider value={{ 
      dialogue, setDialogue,
      username, setUsername,
      firstname, setFirstname,
      lastname, setLastname,
      password, setPassword,
      resetpass, setResetpass,
      email, setEmail, 
      admin, setAdmin, 
      editmode, seteditMode
    }}>
      {children}
    </dashboardContext.Provider>
  );
}
