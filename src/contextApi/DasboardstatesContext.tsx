// contextApi/DasboardstatesContext

import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface DashboardInterfaceProp {
  dialogue: boolean;
  setDialogue: Dispatch<SetStateAction<boolean>>;
}

interface DashboardContextProviderProps {
  children: ReactNode;
}

export const dashboardContext = createContext<DashboardInterfaceProp>({
  dialogue: false,
  setDialogue: () => {}
});

//context provider should start with capital letter
export function DashboardContextProvider({ children }: DashboardContextProviderProps) {
  const [dialogue, setDialogue] = useState<boolean>(false);

  return (
    <dashboardContext.Provider value={{ dialogue, setDialogue }}>
      {children}
    </dashboardContext.Provider>
  );
}
