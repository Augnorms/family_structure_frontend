import { Button } from "../reusables/formcomponents/Button" 
import { dashboardContext } from "../../contextApi/DasboardstatesContext"
import { useContext, useEffect, useState } from "react"
import { FamilyContext } from "../../contextApi/FamilymembersContext"
import { Heirarchical } from "../../component/reusables/nonformcomponent/Heirarchical";
import axios from "axios";

interface Family{
  id: number;
  label?: string;
  children?: Family[];
}

export const Family_structure = () => {

  const {setDialogue} = useContext(dashboardContext);
  const {} = useContext(FamilyContext);
 
  const [family, setFamily] = useState<Family[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRelationship = async()=>{
      try{
        setLoading(true);
        
        const response = await axios.get("http://localhost:4000/hierarchy");

        if(response && response?.data?.code === 200){
           setFamily(response?.data?.data);
        }
 
      }catch(err:any){
        if(err.response){
          console.error(err);
        }
      }
  };

  useEffect(()=>{
    handleRelationship();
  },[])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const innerText = event.currentTarget.innerText;
  };
  

  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

      <div className="w-full p-2 flex">
         <div className="w-1/2 ">
           structure
         </div>
         <div className="w-1/2 flex  gap-2 justify-end">
           <div className="w-[20%] max-sm:hidden sm:hidden lg:block">
              <Button 
                label="Add member"
                styles="bg-cyan-300 p-2 w-full 
                text-white rounded
                flex justify-center"
                onSubmit={()=>setDialogue("family")} 
              />
           </div>

           <div className="w-[20%] max-sm:hidden sm:hidden lg:block">
              <Button 
                label="Add relation"
                styles="bg-cyan-700 p-2 w-full 
                text-white rounded
                flex justify-center"
                onSubmit={()=>setDialogue("relation")} 
              />
           </div>

           <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
              <Button 
                label="+"
                styles="bg-cyan-300 p-2 w-full 
                text-white rounded
                flex justify-center"
                onSubmit={()=>setDialogue("family")}
              />
           </div>
           <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
              <Button 
                label="+"
                styles="bg-cyan-700 p-2 w-full 
                text-white rounded
                flex justify-center"
                onSubmit={()=>setDialogue("relation")}
              />
           </div>
         </div>
      </div>

      <div className="w-full h-[40vh] mt-5 p-2  overflow-x-auto overflow-y-auto">
         
      {family.length > 0 && <Heirarchical {...family[0]} handleClick={handleClick}/>}
  
      </div>

      <div className="w-full h-[40vh] mt-5 p-2 shadow-md border">

      </div>
        
    </div>
  )
}
