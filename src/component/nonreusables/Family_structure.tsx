import { Button } from "../reusables/formcomponents/Button" 
import { dashboardContext } from "../../contextApi/DasboardstatesContext"
import { useContext } from "react"

export const Family_structure = () => {

  const {} = useContext(dashboardContext);

  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

      <div className="w-full p-2 flex border">
         <div className="w-1/2 ">
           structure
         </div>
         <div className="w-1/2 flex justify-end">
           <div className="w-[20%] max-sm:hidden sm:hidden lg:block">
              <Button 
                label="Add member"
                styles="bg-cyan-300 p-2 w-full 
                text-white rounded
                flex justify-center"
                
              />
           </div>

           <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
              <Button 
                label="+"
                styles="bg-cyan-300 p-2 w-full 
                text-white rounded
                flex justify-center"
             
              />
           </div>
         </div>
      </div>

      <div className="w-full h-[40vh] mt-5 p-2 border">

      </div>

      <div className="w-full h-[40vh] mt-5 p-2 border">

      </div>
        
    </div>
  )
}
