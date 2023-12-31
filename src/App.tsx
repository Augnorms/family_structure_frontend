import { MainRoutes } from "./MainRoutes";
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";
import { LoggedInInforContextProvider } from "./contextApi/LoggedInInforContext";
import { DashboardContextProvider } from "./contextApi/DasboardstatesContext";

function App() {
  return (
    <>
      <div className='w-full h-screen'>
        <LoggedInInforContextProvider>
          <LoginContextProvider>
            <DashboardContextProvider>
              <MainRoutes />
            </DashboardContextProvider>
          </LoginContextProvider>
        </LoggedInInforContextProvider>
      </div>
    </>
  );
}

export default App;
