import { MainRoutes } from "./MainRoutes";
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";
import {LoggedInInforContextProvider} from "./contextApi/LoggedInInforContext";


function App() {
  return (
    <>
      <div className='w-full h-screen'>

        <LoggedInInforContextProvider>
          <LoginContextProvider>
              <MainRoutes />
          </LoginContextProvider>
        </LoggedInInforContextProvider>

      </div>
    </>
  );
}

export default App;