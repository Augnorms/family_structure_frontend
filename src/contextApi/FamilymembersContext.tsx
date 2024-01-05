import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";
interface Dataprop{
    name:string;
    dob:string;
    gender:string;
    hometown:string;
}
interface FamilyProp{
    name:string;
    setName:Dispatch<SetStateAction<string>>;
    gender:string;
    setGender:Dispatch<SetStateAction<string>>;
    dob:string;
    setDob:Dispatch<SetStateAction<string>>;
    hometown:string;
    setHometown:Dispatch<SetStateAction<string>>;
    returnData:Dataprop[];
    setReturnData:Dispatch<SetStateAction<Dataprop[]>>;
}

export const FamilyContext = createContext<FamilyProp>({
    name:"",
    setName:()=>{},
    gender:"",
    setGender:()=>{},
    dob:"",
    setDob:()=>{},
    hometown:"",
    setHometown:()=>{},
    returnData:[],
    setReturnData:()=>{}
});

interface FamilyrProps {
    children: ReactNode;
}

export function FamilyContextProvider({children}:FamilyrProps){
   const [name, setName] = useState<string>("");
   const [gender, setGender] = useState<string>("");
   const [dob, setDob] = useState<string>("");
   const [hometown, setHometown] = useState<string>("");
   const [returnData, setReturnData] = useState<Dataprop[]>([]);

   return(
    <FamilyContext.Provider value={{
        name, setName,
        gender, setGender,
        dob, setDob,
        hometown, setHometown,
        returnData, setReturnData
       }}>
          {children}
    </FamilyContext.Provider>
   )
}