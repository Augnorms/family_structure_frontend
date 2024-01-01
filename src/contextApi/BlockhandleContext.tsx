import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface BlockProp  {
    succesdisplay:boolean;
    setSucessDisplay:Dispatch<SetStateAction<boolean>>;
    sucessmessage:string;
    setSuccessMessage:Dispatch<SetStateAction<string>>;

    errordisplay:boolean,
    setErrorDisplay:Dispatch<SetStateAction<boolean>>;
    erroMessage:string,
    setErrorMessage:Dispatch<SetStateAction<string>>;
}

export const blockContext = createContext<BlockProp>({
    succesdisplay:false,
    setSucessDisplay:()=>{},
    sucessmessage:"",
    setSuccessMessage:()=>{},

    errordisplay:false,
    setErrorDisplay:()=>{},
    erroMessage:"",
    setErrorMessage:()=>{}
})

interface BlockPropProviderProps {
    children: ReactNode;
  }

export function BlockContextProvider({children}:BlockPropProviderProps){
    const[succesdisplay, setSucessDisplay] = useState<boolean>(false);
    const[sucessmessage, setSuccessMessage] = useState<string>("");
    const[errordisplay, setErrorDisplay] = useState<boolean>(false);
    const[erroMessage, setErrorMessage] = useState<string>("");

    return(
      <blockContext.Provider value={{
        succesdisplay, setSucessDisplay, sucessmessage, setSuccessMessage,
        errordisplay, setErrorDisplay, erroMessage, setErrorMessage
        }}>
         {children}
      </blockContext.Provider>
    )
}