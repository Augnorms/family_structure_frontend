import { TbHierarchy3 } from "react-icons/tb";
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
        
        const response = await axios.get(import.meta.env.VITE_HEIRARCHY);

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

  const handleClick = (id: number) => {
    // Handle the click event here with the id
  };
  
  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

      <div className="w-full p-2 flex">
         <div className="w-full text-center font-bold text-[25px] shadow-sm text-cyan-700">
           Family structure
         </div>
      </div>

      <div className="w-full h-screen mt-5 p-2  overflow-x-auto overflow-y-auto">
         
          {
          
          family.length > 0 ? <Heirarchical {...family[0]} handleClick={handleClick}/>
          :
           <>
             <div className="w-full flex justify-center shadow-md rounded">

                <TbHierarchy3 size={150}/>

             </div>
             <div className="w-full flex justify-center text-red-400 font-bold mt-2">
                <h2>Sorry waiting for data...</h2>
             </div>
           </>
          }
  
      </div>
        
    </div>
  )
}
