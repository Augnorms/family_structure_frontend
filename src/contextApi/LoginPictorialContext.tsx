import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface LoginContextProps {
  familyNames: string;
  setfamilyNames: Dispatch<SetStateAction<string>>;
}

//always use this at the various components?
export const LoginContext = createContext<LoginContextProps>({
    familyNames: "",
    setfamilyNames: ()=>{},
});

interface LoginContextProviderProps {
  children: ReactNode;
}

//always set this at the central point like mainroutes
export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const [familyNames, setfamilyNames] = useState<string>("");

  return (
    <LoginContext.Provider value={{ familyNames, setfamilyNames }}>
      {children}
    </LoginContext.Provider>
  );
}
