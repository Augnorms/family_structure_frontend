import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface memData{
    name:string;
    gender:string;
    hometown:string;
    mememail:string;
    memmother:string;
    memfather:string;
    memplaceofbirth:string;
}

interface MemProps {
  memuserId: string; // Corrected property name
  setMemuserId: Dispatch<SetStateAction<string>>;
  memname: string;
  setMemname: Dispatch<SetStateAction<string>>;
  mememail: string;
  setMememail: Dispatch<SetStateAction<string>>;
  memgender: string;
  setMemgender: Dispatch<SetStateAction<string>>;
  memdateofbirth: string;
  setMemdateofbirth: Dispatch<SetStateAction<string>>;
  memplaceofbirth: string;
  setMemplaceofbirth: Dispatch<SetStateAction<string>>;
  memoccupation: string;
  setMemoccupation: Dispatch<SetStateAction<string>>;
  memnationality: string;
  setMemnationality: Dispatch<SetStateAction<string>>;
  memphonenumber: string;
  setMemphonenumber: Dispatch<SetStateAction<string>>;
  memmother: string;
  setMemmother: Dispatch<SetStateAction<string>>;
  memfather: string;
  setMemfather: Dispatch<SetStateAction<string>>;
  memmaritalstatus: string;
  setMemmaritalstatus: Dispatch<SetStateAction<string>>;
  memnumberofchildren: string;
  setMemnumberofchildren: Dispatch<SetStateAction<string>>;
  memprimaryeducation: string;
  setMemprimaryeducation: Dispatch<SetStateAction<string>>;
  memsecondaryeducation: string;
  setMemsecondaryeducation: Dispatch<SetStateAction<string>>;
  memtertiaryeducation: string;
  setMemtertiaryeducation: Dispatch<SetStateAction<string>>;
  memhometown: string;
  setMemhometown: Dispatch<SetStateAction<string>>;
  memIsUpdate: number; 
  setMemIsUpdate: Dispatch<SetStateAction<number>>;
  memData:memData[];
  setMemData:Dispatch<SetStateAction<memData[]>>;
};

interface MemberContextProviderProps {
    children: ReactNode;
};
  

export const memberContext = createContext<MemProps>({
  memuserId: "",
  setMemuserId: () => {},
  memname: "",
  setMemname: () => {},
  mememail: "",
  setMememail: () => {},
  memgender: "",
  setMemgender: () => {},
  memdateofbirth: "",
  setMemdateofbirth: () => {},
  memplaceofbirth: "",
  setMemplaceofbirth: () => {},
  memoccupation: "",
  setMemoccupation: () => {},
  memnationality: "",
  setMemnationality: () => {},
  memphonenumber: "",
  setMemphonenumber: () => {},
  memmother: "",
  setMemmother: () => {},
  memfather: "",
  setMemfather: () => {},
  memmaritalstatus: "",
  setMemmaritalstatus: () => {},
  memnumberofchildren: "",
  setMemnumberofchildren: () => {},
  memprimaryeducation: "",
  setMemprimaryeducation: () => {},
  memsecondaryeducation: "",
  setMemsecondaryeducation: () => {},
  memtertiaryeducation: "",
  setMemtertiaryeducation: () => {},
  memhometown: "",
  setMemhometown: () => {},
  memIsUpdate: 0,
  setMemIsUpdate: () => {},
  memData:[],
  setMemData:()=>{}
});

export function MemberContextProvider({children}:MemberContextProviderProps) {
    const [memuserId, setMemuserId] = useState<string>("");
    const [memname, setMemname] = useState<string>("");
    const [mememail, setMememail] = useState<string>("");
    const [memgender, setMemgender] = useState<string>("");
    const [memdateofbirth, setMemdateofbirth] = useState<string>("");
    const [memplaceofbirth, setMemplaceofbirth] = useState<string>("");
    const [memoccupation, setMemoccupation] = useState<string>("");
    const [memnationality, setMemnationality] = useState<string>("");
    const [memphonenumber, setMemphonenumber] = useState<string>("");
    const [memmother, setMemmother] = useState<string>("");
    const [memfather, setMemfather] = useState<string>("");
    const [memmaritalstatus, setMemmaritalstatus] = useState<string>("");
    const [memnumberofchildren, setMemnumberofchildren] = useState<string>("");
    const [memprimaryeducation, setMemprimaryeducation] = useState<string>("");
    const [memsecondaryeducation, setMemsecondaryeducation] = useState<string>("");
    const [memtertiaryeducation, setMemtertiaryeducation] = useState<string>("");
    const [memhometown, setMemhometown] = useState<string>("");
    const [memIsUpdate, setMemIsUpdate] = useState<number>(0);
    const [memData, setMemData] = useState<memData[]>([])
   
    const contextValue = {
      memuserId,
      setMemuserId,
      memname,
      setMemname,
      mememail,
      setMememail,
      memgender,
      setMemgender,
      memdateofbirth,
      setMemdateofbirth,
      memplaceofbirth,
      setMemplaceofbirth,
      memoccupation,
      setMemoccupation,
      memnationality,
      setMemnationality,
      memphonenumber,
      setMemphonenumber,
      memmother,
      setMemmother,
      memfather,
      setMemfather,
      memmaritalstatus,
      setMemmaritalstatus,
      memnumberofchildren,
      setMemnumberofchildren,
      memprimaryeducation,
      setMemprimaryeducation,
      memsecondaryeducation,
      setMemsecondaryeducation,
      memtertiaryeducation,
      setMemtertiaryeducation,
      memhometown,
      setMemhometown,
      memIsUpdate,
      setMemIsUpdate,
      memData, 
      setMemData
    };

return(
    <memberContext.Provider value={contextValue}>
       {children}
    </memberContext.Provider>
   )
};
