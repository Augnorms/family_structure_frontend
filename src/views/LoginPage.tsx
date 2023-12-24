import { Loginpictorial } from "../component/reusables/nonformcomponent/Loginpictorial";
import LoginImage from "../assets/login-bg-2.jpg";
import Mamaa from "../assets/Mamaa2.jpg";

export const LoginPage = () => {
  return (
    <div className="w-full h-screen">
       <div className="w-full p-2 flex gap-2">
         <div className="w-10 h-10 rounded-full shadow-md shadow-md flex justify-center items-center">
           <img src={Mamaa} className="w-10 h-10 object-fill rounded-full" alt={`Image ${Mamaa}`} /> 
         </div>

         <div className="w-full text-center bg-cyan-600 p-1 text-white">
           <p className="text-lg">Welcome to Dorothy Payne family structure</p>
         </div>
       </div> 

       <div className="max-sm:h-screen xl:h-[90vh] p-2 grid md:grid-cols-2 ">
          <div className="flex justify-center items-center max-sm:col-span-1 md:col-span-1 p-2">

             <div className="p-2 border max-sm:w-4/5 md:w-1/2">

             </div>

          </div>

          <div 
            className={`
            flex
            justify-center
            items-center 
            max-sm:col-span-1 
            md:col-span-1 
            md:p-10
            max-sm:overflow-auto
            `}
            style={{ backgroundImage: `url(${LoginImage})` }}
            >

              <Loginpictorial />  

          </div>
       </div>
    </div>
  )
}
