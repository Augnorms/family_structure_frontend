import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { Dashboard } from "./views/Dashboard";

export const MainRoutes = () => {
  return (
   
      <Routes>
        <Route 
         path="/" 
         element={<LoginPage />}
         />

         <Route 
          path="/dashboard"
          element={<Dashboard />}
         />
      </Routes>

  )
}
