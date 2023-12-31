import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface BlockProp  {
    display:boolean;
    setDisplay:Dispatch<SetStateAction<boolean>>;
    message:string;
    setMessage:Dispatch<SetStateAction<string>>;
}

export const blockContext = createContext<BlockProp>({
    display:false,
    setDisplay:()=>{},
    message:"",
    setMessage:()=>{}
})

interface BlockPropProviderProps {
    children: ReactNode;
  }

export function BlockContextProvider({children}:BlockPropProviderProps){
    const[display, setDisplay] = useState<boolean>(false);
    const[message, setMessage] = useState<string>("");

    return(
      <blockContext.Provider value={{display, setDisplay, message, setMessage}}>
         {children}
      </blockContext.Provider>
    )
}