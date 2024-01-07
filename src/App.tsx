import { MainRoutes } from "./MainRoutes";
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";
import { LoggedInInforContextProvider } from "./contextApi/LoggedInInforContext";
import { DashboardContextProvider } from "./contextApi/DasboardstatesContext";
import { BlockContextProvider } from "./contextApi/BlockhandleContext";
import { ProfileContextProvider } from "./contextApi/ProfileContext";
import { FamilyContextProvider } from "./contextApi/FamilymembersContext";
import { MemberContextProvider } from "./contextApi/MembersContext";

function App() {
  return (
    <>
      <div className='w-full h-screen'>
       <MemberContextProvider>
         <FamilyContextProvider>
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
         </FamilyContextProvider>  
       </MemberContextProvider>     
      </div>
    </>
  );
}

export default App;
