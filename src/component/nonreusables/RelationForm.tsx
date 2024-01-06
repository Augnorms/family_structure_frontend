import { IoIosCloseCircle } from "react-icons/io";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { useContext, useEffect, useState } from "react";
import { Select } from "../reusables/formcomponents/Select";
import { Button } from "../reusables/formcomponents/Button";
import Selects from 'react-select';
import CheckboxOption from "../reusables/formcomponents/MultiSelect";
import { FamilyContext } from "../../contextApi/FamilymembersContext";
import axios from "axios";
import { blockContext } from "../../contextApi/BlockhandleContext";

interface resProp{
      id: number,
      name: string,
      gender: string,
      dob: string,
      hometown: string
}

export const RelationForm = () => {

  const {setDialogue} = useContext(dashboardContext);  
  const {returnData} = useContext(FamilyContext);
  const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext);

  const [selectData, setSelectdata] = useState<resProp[]>([])
  const [parentid, setParentid] = useState<string>("");
  const [childData, setChildData] = useState<{value:string, label:string}[]>([]);
  const [childid, setChildid] = useState<{value:string, label:string}[]>([]);
  const [loading, setloading] = useState<boolean>(false);

useEffect(()=>{
 setSelectdata(returnData);
},[]);

const parents = selectData.map((data)=>{
    return{
        id:String(data.id),
        name:data.name
    }
})

const children = selectData.map((data)=>{
    return{
        value:String(data.id),
        label:data.name
    }
});

const handleparent = (event: React.ChangeEvent<HTMLSelectElement>)=>{
  const value = event.target.value;
  setParentid(value);
}

const handleChild = (selected:any) => {
    const id = selected?.map((val:any)=>{
        return val.value
    })
    setChildData(selected);
    setChildid(id);
};

//handle creation..
const handlecreation = async()=>{
    try{
     setloading(true);
      const response = await axios.post("http://localhost:4000/createrelationship",{
        parent_id:parentid,
        child_ids:childid
      });

      if(response && response?.data.code == 200){
        setSucessDisplay(true);
        setSuccessMessage(response?.data?.message);
     
        setTimeout(()=>{
            setSucessDisplay(false);
            setSuccessMessage("");
          }, 3000);
          handleClose();
      }
    }catch(err:any){
      console.error(err.response);
      if(err.response){
        setErrorDisplay(true);
        setErrorMessage(err.response?.data?.message);

        setTimeout(()=>{
        setErrorDisplay(false);
        setErrorMessage("");
        }, 3000)
      }
    }finally{
        setloading(false);
    }
}

const handleClose = ()=>{
    setDialogue("");
    setParentid("");
    setChildData([]);
    setChildid([]);
 }  

  return (
    <div>
        <div className='w-full '>
          <div className="w-full flex">
            <div className='w-[97%] text-center font-bold mb-2'>
                <h3>Add relationship form</h3>
            </div>
            <div className='w-8 h-8 relative bottom-8 
                left-3 mb-[-10px] rounded-full 
                bg-white shadow-md flex justify-center items-center cursor-pointer'>
                <IoIosCloseCircle color={'red'} onClick={handleClose}/>
            </div>
          </div>
          <div className="w-full">

             <div className="mt-5">
                <Select 
                  labelOne="Gender"
                  style='
                  w-full border border-cyan-300 
                  pl-10 p-2.5
                  hover:border-cyan-300
                  rounded-lg focus:outline-cyan-300  
                  focus:ring-3 focus:ring-cyan-300  
                  txt-field-style peer text-gray-900 
                  text-sm block  dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                  data={parents}
                  placeholder="Select parent"
                  value={parentid}
                  onChange={handleparent}
                />

                <Selects
                  className="
                  w-full border border-cyan-300
                  hover:border-cyan-300 mt-5 
                  rounded-lg focus:outline-cyan-300  
                  focus:ring-3 focus:ring-cyan-300  
                  txt-field-style peer text-cyan-900 
                  text-sm block
                  dark:placeholder-gray-400 dark:text-white  dark:focus:border-cyan-300
                  
                  "
                  placeholder="Select child here..."
                  options={children}
                  components={{ Option: CheckboxOption }}
                  isMulti
                  value={childData}
                  onChange={handleChild}
                />
                
             </div>

             <div className="w-full mt-4">
                <Button 
                 label="Add"
                 styles="bg-cyan-300 p-2 w-full 
                 text-white rounded
                 flex justify-center"
                 disabled={parentid=="" || childid.length == 0}
                 loading={loading}
                 onSubmit={handlecreation}
                />
             </div>
          </div>
       </div> 
    </div>
  )
}
