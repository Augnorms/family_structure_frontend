// contextApi/DasboardstatesContext

import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface UsersProp{
  loginId:number,
  username:string,
  password:string,
  firstname:string,
  lastname:string,
  email:string,
  isadmin:number
}

interface VerificationProp{
  id:number,
  user_id:number,
  code:number,
  expiration_time:string,
  created_at:string
}
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
  tables:string;
  setTables:Dispatch<SetStateAction<string>>;
  users:UsersProp[];
  setUsers:Dispatch<SetStateAction<UsersProp[]>>;
  verify:VerificationProp[];
  setVerify:Dispatch<SetStateAction<VerificationProp[]>>;
  deleteTitle:string;
  setDeleteTitle:Dispatch<SetStateAction<string>>;
  deleteAction:boolean;
  setDeleteAction:Dispatch<SetStateAction<boolean>>;
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
  seteditMode:()=>{},
  tables:"",
  setTables:()=>{},
  users:[],
  setUsers:()=>{},
  verify:[],
  setVerify:()=>{},
  deleteTitle:"",
  setDeleteTitle:()=>{},
  deleteAction:false,
  setDeleteAction:()=>{},

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
  const[tables, setTables] = useState<string>("users");
  const[users, setUsers] = useState<UsersProp[]>([]);
  const[verify, setVerify] = useState<VerificationProp[]>([]);
  const[deleteTitle, setDeleteTitle] = useState<string>("");
  const[deleteAction, setDeleteAction] = useState<boolean>(false);

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
      editmode, seteditMode,
      tables, setTables,
      users, setUsers,
      verify, setVerify,
      deleteTitle, setDeleteTitle,
      deleteAction, setDeleteAction
    }}>
      {children}
    </dashboardContext.Provider>
  );
}
