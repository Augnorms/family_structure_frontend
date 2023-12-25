import { MainRoutes } from "./MainRoutes"
import { LoginContextProvider } from "./contextApi/LoginPictorialContext";

function App() {


  return (
    <>
      <div className='w-full h-screen'>
        <LoginContextProvider>
           <MainRoutes />
        </LoginContextProvider> 
      </div>
    </>
  )
}

export default App
