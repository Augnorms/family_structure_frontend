import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "./views/LoginPage"

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
         path="/" 
         element={<LoginPage />}
         />
      </Routes>
    </BrowserRouter>
  )
}
