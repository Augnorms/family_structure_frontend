import { MainRoutes } from "./MainRoutes";
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";
import { LoggedInInforContextProvider } from "./contextApi/LoggedInInforContext";
import { DashboardContextProvider } from "./contextApi/DasboardstatesContext";
import { BlockContextProvider } from "./contextApi/BlockhandleContext";

function App() {
  return (
    <>
      <div className='w-full h-screen'>
        <BlockContextProvider>
         <LoggedInInforContextProvider>
          <LoginContextProvider>
            <DashboardContextProvider>
              <MainRoutes />
            </DashboardContextProvider>
          </LoginContextProvider>
         </LoggedInInforContextProvider>
        </BlockContextProvider> 
      </div>
    </>
  );
}

export default App;
