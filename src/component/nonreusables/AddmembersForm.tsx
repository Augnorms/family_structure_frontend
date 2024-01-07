import { useContext, useEffect, useState } from "react";
import { FamilyContext } from "../../contextApi/FamilymembersContext";
import { Select } from "../reusables/formcomponents/Select";
import { memberContext } from "../../contextApi/MembersContext";
import moment from "moment"
import { Inputs } from "../reusables/formcomponents/Inputs";
import { Button } from "../reusables/formcomponents/Button";
import { MembersTable } from "./MembersTable";
import axios from "axios";
import { blockContext } from "../../contextApi/BlockhandleContext";

interface resProp{
    id: number,
    name: string,
    gender: string,
    dob: string,
    hometown: string
}

export const AddmembersForm = () => {

  const {returnData} = useContext(FamilyContext);
  const {memname, setMemname, memgender, setMemgender, memdateofbirth, setMemdateofbirth,
         memhometown, setMemhometown, memIsUpdate, setMemIsUpdate, mememail, setMememail,
         memmother, setMemmother, memfather, setMemfather, memmaritalstatus, setMemmaritalstatus,
         memprimaryeducation, setMemprimaryeducation, memsecondaryeducation, setMemsecondaryeducation,
         memtertiaryeducation, setMemtertiaryeducation, memoccupation, setMemoccupation,
         memnumberofchildren, setMemnumberofchildren, memplaceofbirth, setMemplaceofbirth,
         memData, setMemData
        } = useContext(memberContext);

        const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext); 

  const[members, setMembers] = useState<resProp[]>([]);
  const[fammember, setFammember] = useState<string>("");
  const[id, setId] = useState<number>(0); 
  const[loadingcreation, setLoadingcreation] = useState<boolean>(false); 

  useEffect(()=>{
   setMembers(returnData);
  },[]);

  const family = members.map((data)=>{
    return{
        id:String(data.id),
        name:data.name
    }
  });

  const handleselct = (event: React.ChangeEvent<HTMLSelectElement>)=>{
  
      const val = event.target.value;
      setFammember(val); 
     
  }

  const findMember = members.find((mem)=>{
    return mem.id === Number(fammember);
  })

  useEffect(()=>{
    //set default input fields
    if(findMember){
        setId(findMember.id);
        setMemname(findMember.name);
        setMemgender(findMember.gender);
        setMemdateofbirth(moment(findMember.dob).format("").split('T')[0]);
        setMemhometown(findMember.hometown);
    }

    //fetch details from backend
    if(fammember){
      handledetail();
    }
  },[findMember, fammember]);

  //get detailed infor for member
  const handledetail = async()=>{
     try{

        const response = await axios.post("http://localhost:4000/fetchmemberbyid", {
            refid:fammember
        });

        if(response && response?.data?.code === 200){

          setMememail(response?.data?.data[0]?.mememail);
          setMemmother(response?.data?.data[0]?.memmother);
          setMemfather(response?.data?.data[0]?.memfather);
          setMemmaritalstatus(response?.data?.data[0]?.memmaritalstatus);
          setMemprimaryeducation(response?.data?.data[0]?.memprimaryeducation);
          setMemsecondaryeducation(response?.data?.data[0]?.memsecondaryeducation);
          setMemtertiaryeducation(response?.data?.data[0]?.memtertiaryeducation);
          setMemoccupation(response?.data?.data[0]?.memoccupation);
          setMemnumberofchildren(response?.data?.data[0]?.memnumberofchildren);
          setMemplaceofbirth(response?.data?.data[0]?.memplaceofbirth);
        }

     }catch(err:any){
       console.error(err.response?.data);
     }
  };

  const place = [
    {id:"1", name:"Western Region"},
    {id:"2", name:"Western North Region"},
    {id:"3", name:"Central Region"},
    {id:"4", name:"Greater Accra Region"},
    {id:"5", name:"Ashanti Region"},
    {id:"6", name:"Eastern Region"},
    {id:"7", name:"Bono East Region"},
    {id:"8", name:"Ahafo Region"},
    {id:"9", name:"Brong ahafo Region"},
    {id:"10", name:"Oti Region"},
    {id:"11", name:"Northern Region"},
    {id:"12", name:"Savanah Region"},
    {id:"13", name:"North East Region"},
    {id:"14", name:"Upper West Region"},
    {id:"15", name:"Upper East Region"},
    {id:"16", name:"Volta Region"},
  ];

  const handleinputs = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    if(id === "email"){
      setMememail(value);
    }else if(id === "mother"){
      setMemmother(value);
    }else if(id === "father"){
      setMemfather(value);
    }else if(id === "marital"){
      setMemmaritalstatus(value);
    }else if(id === "primary"){
      setMemprimaryeducation(value);
    }else if(id === "secondary"){
      setMemsecondaryeducation(value);  
    }else if(id === "tertiary"){
      setMemtertiaryeducation(value);
    }else if(id === "occupation"){
       setMemoccupation(value); 
    }else if(id === "numberofchildren"){
       setMemnumberofchildren(value); 
    }
  };

  const handlegender = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setMemgender(event.target.value);
  };

  const handlebirth = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setMemplaceofbirth(event.target.value);
  };

const handleClear = ()=>{
    setFammember("");
    setMemname("");
    setMemgender("");
    setMemdateofbirth("");
    setMemhometown("");
    setMememail("");
    setMemmother("");
    setMemfather("");
    setMemmaritalstatus("");
    setMemprimaryeducation("");
    setMemsecondaryeducation("");
    setMemtertiaryeducation("");
    setMemoccupation("");
    setMemnumberofchildren("");
    setMemplaceofbirth("");
};

//creaing a member
const handlecreation = async()=>{
    try{
        setLoadingcreation(true);
        const response = await axios.post("http://localhost:4000/allmemmbers", {
            memuserId:id,
            mememail:mememail,
            memmother:memmother,
            memfather:memfather,
            memmaritalstatus:memmaritalstatus,
            memprimaryeducation:memprimaryeducation,
            memsecondaryeducation:memsecondaryeducation,
            memtertiaryeducation:memtertiaryeducation,
            memoccupation:memoccupation,
            memnumberofchildren:Number(memnumberofchildren),
            memplaceofbirth:memplaceofbirth
        })

       if(response && response?.data?.code == 200){
  
        setSucessDisplay(true);
        setSuccessMessage(response?.data?.message);
        setTimeout(()=>{
          setSucessDisplay(false);
          setSuccessMessage("");
        },3000)
       }
       handleallmembers();//refetch data
       handleClear()//clear form

    }catch(err:any){
        console.log(err.response);
        setErrorDisplay(true);
        setErrorMessage(err.response?.data?.message);
        setTimeout(()=>{
          setErrorDisplay(false);
          setErrorMessage("");
        }, 3000);
    }finally{
        setLoadingcreation(false);
    }
};

//fetch all members
const handleallmembers = async()=>{
  try{
   const response = await axios.get("http://localhost:4000/fetchallmembers"); 

   if(response && response?.data?.code === 200){
    setMemData(response?.data?.data);
   }

  }catch(err:any){
    console.error(err.response?.data?.err)
  }
};

useEffect(()=>{
handleallmembers();
},[]);

//get names for comparison
const nameData = memData?.map((data)=>data?.name);

//handle update
const handleupdate = async()=>{
//    const value = fammember;
//    console.log(value);
};

//handle Delete
const handledelete = async()=>{
    // const value = fammember;
    // console.log(value);
};

  return (
    <div className="w-full h-[92vh] mt-1">
       <div className="w-full p-2 flex justify-center shadow-md">
          <div className="flex items-center mr-4 font-bold">Select family member:</div>
          <div className="w-[20%]">
            <Select 
                style='
                w-full border border-cyan-300 
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300  
                focus:ring-3 focus:ring-cyan-300  
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                data={family}
                placeholder="Select family member"
                value={fammember}
                onChange={handleselct}
            /> 
          </div>
          <div className="flex items-center ml-4">
            <Button 
             label="Clear"
             styles="text-orange-600 p-2 w-full 
              text-white rounded
              flex justify-center shadow-md hover:text-orange-300"
              onSubmit={handleClear}
            />
          </div>
       </div>
       
       <div className="w-full grid lg:grid-cols-4 gap-2 p-2">
        <Inputs 
            type="text"
            id="name"
            style="
            w-full border border-cyan-300
            pl-10 p-2.5
            hover:border-cyan-300
            rounded-lg focus:outline-cyan-300 
            focus:ring-3 focus:border-cyan-300 
            txt-field-style peer text-gray-900 
            text-sm block  dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
            "
            placeholder="Enter name here ..."
            labelOne="Name"
            value={memname}
            onChange={handleinputs}
            disabled
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
            data={[{id:"1", name:"Male"}, {id:"2", name:"Female"}]}
            placeholder="Select gender here ..."
            value={memgender}
            onChange={handlegender}
            disabled
        />

         <Inputs 
            type="date"
            id="date"
            style="
            w-full border border-cyan-300
            pl-10 p-2.5
            hover:border-cyan-300
            rounded-lg focus:outline-cyan-300 
            focus:ring-3 focus:border-cyan-300 
            txt-field-style peer text-gray-900 
            text-sm block  dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
            "
            placeholder="Enter date here ..."
            labelOne="Dob"
            value={memdateofbirth}
            onChange={handleinputs}
            disabled
         />

          <Inputs 
            type="text"
            id="hometown"
            style="
            w-full border border-cyan-300
            pl-10 p-2.5
            hover:border-cyan-300
            rounded-lg focus:outline-cyan-300 
            focus:ring-3 focus:border-cyan-300 
            txt-field-style peer text-gray-900 
            text-sm block  dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
            "
            placeholder="Enter hometown here ..."
            labelOne="Hometown"
            value={memhometown}
            onChange={handleinputs}
            disabled
         />
       </div>

       {memname ?
        <div className="w-full grid lg:grid-cols-4 gap-2 p-2 shadow-md mt-4">
            <Inputs 
                type="email"
                id="email"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter email here ..."
                labelOne="Email"
                value={mememail}
                onChange={handleinputs}
              
            />

            <Inputs 
                type="text"
                id="mother"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter mothers name here ..."
                labelOne="Mother"
                value={memmother}
                onChange={handleinputs}
                
            />

            <Inputs 
                type="text"
                id="father"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter fathers name here ..."
                labelOne="Father"
                value={memfather}
                onChange={handleinputs}
   
            />

            <Inputs 
                type="text"
                id="marital"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter marital status here ..."
                labelOne="Marital status"
                value={memmaritalstatus}
                onChange={handleinputs}
       
            />

            <Inputs 
                type="text"
                id="primary"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter primary education here ..."
                labelOne="Primary education"
                value={memprimaryeducation}
                onChange={handleinputs}
       
            />

            <Inputs 
                type="text"
                id="secondary"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter secondary education here ..."
                labelOne="Secondary education"
                value={memsecondaryeducation}
                onChange={handleinputs}
       
            />

             <Inputs 
                type="text"
                id="tertiary"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter tertiary education here ..."
                labelOne="Tertiary education"
                value={memtertiaryeducation}
                onChange={handleinputs}
       
            />

            <Inputs 
                type="text"
                id="occupation"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter occupation here ..."
                labelOne="Occupation"
                value={memoccupation}
                onChange={handleinputs}
       
            />

            <Inputs 
                type="number"
                id="numberofchildren"
                style="
                w-full border border-cyan-300
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300 
                focus:ring-3 focus:border-cyan-300 
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300
                "
                placeholder="Enter number of children here ..."
                labelOne="Numbr of children"
                value={memnumberofchildren}
                onChange={handleinputs}
       
            />

            <Select 
                labelOne="Place Of Birth"
                style='
                w-full border border-cyan-300 
                pl-10 p-2.5
                hover:border-cyan-300
                rounded-lg focus:outline-cyan-300  
                focus:ring-3 focus:ring-cyan-300  
                txt-field-style peer text-gray-900 
                text-sm block  dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                data={place}
                placeholder="Select place of birth here ..."
                value={memplaceofbirth}
                onChange={handlebirth}
            />

        </div>:
        <div></div>
       }

       {memname ?
        <div className="w-full flex justify-center shadow-md p-2">

          {!nameData?.includes(memname) ?
           <div className="w-[20%]">
            <Button 
                label="Save"
                styles="text-white p-2 w-full 
                bg-cyan-300 
                text-white rounded
                flex justify-center shadow-md hover:text-orange-300"
                onSubmit={handlecreation}
                loading={loadingcreation}
            />
          </div>
            :
           <div className="w-full flex justify-center gap-1 mt-1">
                <div className="w-[20%]">
                    <Button 
                        label="Update"
                        styles="text-white p-2 w-full 
                        bg-cyan-900 
                        text-white rounded
                        flex justify-center shadow-md hover:text-orange-300"
                        onSubmit={handleupdate}
                    />
                </div>
                <div className="w-[20%]">
                    <Button 
                        label="Delete"
                        styles="text-white p-2 w-full 
                        bg-red-400 
                        text-white rounded
                        flex justify-center shadow-md hover:text-orange-300"
                        onSubmit={handledelete}
                    />
                </div>
            </div>}

        </div>
          :
        <div>
            
        </div>
       }

       <div className="w-full h-[38vh] shadow-lg mt-2 overflow-auto">

           <MembersTable data={memData}/>

       </div>
  
    </div>
  )
}
