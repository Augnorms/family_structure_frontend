import { ButtonSpinner } from "./ButtonSpinner"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";

type Props = {
   show:boolean,
   label:string
}

export const LoginMessage = (props:Props) => {
  return (
    <div className='w-full flex justify-center'>
       {props.show ? <div className="
         max-sm:w-[100%] 
         sm:w-[100%] 
         lg:w-[80%] 
         border-t-4 
         border-cyan-300 p-2 
         shadow-md rounded 
         mt-20
         flex
         gap-2
         ">
         <div className="
           w-20 h-20 rounded-full
           border shadow-md
           border-t-4 
           border-cyan-300 p-2 
           flex
           justify-center
           items-center
           ">
           {props.label === "success" ?
            <ButtonSpinner size="small"/>
            :
            <VscError size={40} color={'red'}/>
           }
         </div>
         <div className="w-full  flex">
           <div className="w-[80%] text-lg font-bold flex justify-center items-center">
             {props.label === "success" ?
                <p className="text-emerald-500">{props.label+" (wait you will be redirected soon...)"}</p>
                :
                <p className="text-rose-500">{props.label+" (please try again)"}</p>
             }
           </div>

           <div className="w-[20%] flex justify-center items-center">
              <div className="w-10 h-10 rounded-full border shadow-md flex justify-center items-center">
               {props.label === "success" ? 
                 <IoCheckmarkCircleOutline size={30} color={'green'}/> 
                 :
                 <VscError size={30} color={'red'}/>
                } 
              </div>
           </div>
         </div>
       </div> 
       : 
       <div></div>
       }
    </div>
  )
}
