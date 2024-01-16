
import { Button } from '../formcomponents/Button';
import { dashboardContext } from '../../../contextApi/DasboardstatesContext';
import { useContext } from 'react';


export const DeleteComp = () => {

const {setDialogue, setDeleteAction, deleteTitle, deleteIndicator} = useContext(dashboardContext);

  return (
    <div className='w-full flex justify-center p-2'>
        <div className=''>
            <p>Are you srure you want to delete <span className='font-bold'>{deleteTitle}</span></p>
            <div className='w-full flex gap-2 mt-4'>
              <div className='w-[50%]'>
                <Button 
                    label="Delete"
                    styles="text-white p-2 w-full 
                    bg-red-400 
                    text-white rounded
                    flex justify-center shadow-md hover:text-orange-300"
                   onSubmit={()=>setDeleteAction(deleteIndicator)}
                />                
              </div>
              <div className='w-[50%]'>
                <Button 
                   label="Cancel"
                   styles="text-white p-2 w-full 
                   bg-sky-400
                   text-white rounded
                  flex justify-center shadow-md hover:text-orange-300"
                   onSubmit={()=>setDialogue("")}
                 />  
              </div>
            </div>
        </div>
    </div>
  )
}
