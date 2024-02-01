import { IoIosCloseCircle } from "react-icons/io";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { FamilyContext } from "../../contextApi/FamilymembersContext";
import { blockContext } from "../../contextApi/BlockhandleContext";
import { useContext, useState } from "react";
import { Inputs } from "../reusables/formcomponents/Inputs";
import { Select } from "../reusables/formcomponents/Select";
import { Button } from "../reusables/formcomponents/Button";
import axios from "axios";

export const FamilyForm = () => {

const {setDialogue} = useContext(dashboardContext);
const {name, setName, gender, setGender, dob, setDob, hometown, setHometown, setReturnData} = useContext(FamilyContext);
const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext);
const [loading, setLoading] = useState<boolean>(false);


 const genderData = [
   { id:"1", name:"Male"},
   { id:"2", name:"Female"}
 ];

 const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const id = event.target.id;
    const val = event.target.value;

    if(id === "name"){
      setName(val);
    }else if(id == "date"){
      setDob(val);  
    }else if(id === "hometown"){
      setHometown(val);  
    }
 };

 const handleselect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
     const val = e.target.value
     setGender(val);
 };

 const handleSubmit = async()=>{
  try{
    setLoading(true);
    const response = await axios.post(import.meta.env.VITE_CREATEMEMBER, {
        name:name,
        gender:gender,
        dob:dob,
        hometown:hometown
    });

   if(response && response?.data?.code === 200){
    const newData = response?.data?.data;
    setSucessDisplay(true);
    setSuccessMessage(response?.data?.message);
    setReturnData((prevdata)=>[...newData, ...prevdata]);
    setTimeout(()=>{
        setSucessDisplay(false);
        setSuccessMessage("");
      }, 3000);
      handleClose();
   } 

  }catch(error:any){
    setErrorDisplay(true);
    setErrorMessage(error.response?.data?.message);
    setTimeout(()=>{
      setErrorDisplay(false);
      setErrorMessage("");
    }, 3000)
  }finally{
    setLoading(false);
  }
 };



 const handleClose = ()=>{
    setDialogue("");
    setName("");
    setGender("");
    setDob("");
    setHometown("");
 } 

  return (
    <div className='w-full'>
       <div className='w-full '>
          <div className="w-full flex">
            <div className='w-[97%] text-center font-bold mb-2'>
                <h3>Add member form</h3>
            </div>
            <div className='w-8 h-8 relative bottom-8 
                left-3 mb-[-10px] rounded-full 
                bg-white shadow-md flex justify-center items-center cursor-pointer'>
                <IoIosCloseCircle color={'red'} onClick={handleClose}/>
            </div>
          </div>
          <div className="w-full">
             <div className="lg:flex gap-2">
                <Inputs 
                  type="text"
                  id="name"
                  labelOne="Name"
                  style='
                  w-full border border-cyan-300
                  pl-10 p-2.5
                  hover:border-cyan-300
                  rounded-lg focus:outline-cyan-300 
                  focus:ring-3 focus:border-cyan-300 
                  txt-field-style peer text-gray-900 
                  text-sm block  dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                  placeholder="Enter name here..."
                  value={name}
                  onChange={handleChange}
                /> 
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
                  data={genderData}
                  placeholder="Select gender"
                  value={gender}
                  onChange={handleselect}
                />
             </div>

             <div className="lg:flex gap-2 mt-5">
                <Inputs 
                  type="date"
                  id="date"
                  labelOne="Date of birth"
                  style='
                  w-full border border-cyan-300
                  pl-10 p-2.5
                  hover:border-cyan-300
                  rounded-lg focus:outline-cyan-300 
                  focus:ring-3 focus:border-cyan-300 
                  txt-field-style peer text-gray-900 
                  text-sm block  dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                  placeholder="Enter date of birth here.."
                  value={dob}
                  onChange={handleChange}
                /> 
                <Inputs 
                  type="text"
                  id="hometown"
                  labelOne="Hometown"
                  style='
                  w-full border border-cyan-300
                  pl-10 p-2.5
                  hover:border-cyan-300
                  rounded-lg focus:outline-cyan-300 
                  focus:ring-3 focus:border-cyan-300 
                  txt-field-style peer text-gray-900 
                  text-sm block  dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                  placeholder="Enter hometown here..."
                  value={hometown}
                  onChange={handleChange}
                /> 
             </div>

             <div className="w-full mt-4">
                <Button 
                 label="Submit"
                 styles="bg-cyan-300 p-2 w-full 
                 text-white rounded
                 flex justify-center"
                 onSubmit={handleSubmit}
                 loading={loading}
                 disabled={name=="" || gender=="" || dob=="" || hometown==""}
                />
             </div>
          </div>
       </div>   
    </div>
  )
}
