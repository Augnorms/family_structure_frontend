import { MainRoutes } from "./MainRoutes";
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";
import { LoggedInInforContextProvider } from "./contextApi/LoggedInInforContext";
import { DashboardContextProvider } from "./contextApi/DasboardstatesContext";
import { BlockContextProvider } from "./contextApi/BlockhandleContext";
import { ProfileContextProvider } from "./contextApi/ProfileContext";

function App() {
  return (
    <>
      <div className='w-full h-screen'>
       <ProfileContextProvider> 
        <BlockContextProvider>
         <LoggedInInforContextProvider>
          <LoginContextProvider>
            <DashboardContextProvider>
              <MainRoutes />
            </DashboardContextProvider>
          </LoginContextProvider>
         </LoggedInInforContextProvider>
        </BlockContextProvider>
      </ProfileContextProvider>   
      </div>
    </>
  );
}

export default App;
