import { Button } from "../reusables/formcomponents/Button"
import { Inputs } from "../reusables/formcomponents/Inputs"
import { Select } from "../reusables/formcomponents/Select"
import { ProfilesContext } from "../../contextApi/ProfileContext"
import { blockContext } from "../../contextApi/BlockhandleContext"
import { useContext, useEffect, useState } from "react"
import { initials } from "../../HelperFunction/functions"
import moment from "moment"
import axios from "axios"

export const Members = () => {

const {
    profiluserId, profilefirstname, profilelastname, profileemail,
    profilegender, profiledateofbirth, profileplaceofbirth,
    profileoccupation, profilenationality, profilephonenumber,
    profilemother, profilefather, profilemaritalstatus,
    profilenumberofchildren, profileprimaryeducation, profilesecondaryeducation,
    profiletertiaryeducation, profilehometown, profileisupdate,
    setProfilefirstname, setProfilelastname, setProfileemail,
    setProfilegender, setProfiledateofbirth, setProfileplaceofbirth,
    setProfileoccupation, setProfilenationality, setProfilephonenumber,
    setProfilemother, setProfilefather, setProfilemaritalstatus,
    setProfilenumberofchildren, setProfileprimaryeducation, setProfilesecondaryeducation,
    setProfiletertiaryeducation, setProfilehometown, setprofileisupdate
} = useContext(ProfilesContext);

const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext); 

const [loading, setloading] = useState<boolean>(false);


const handleinputs = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;

    if(id === "firstname"){
        setProfilefirstname(value);
    }else if(id === "lastname"){
        setProfilelastname(value);
    }else if(id === "email"){
        setProfileemail(value);
    }else if(id === "gender"){
        setProfilegender(value);
    }else if(id === "dateofbirth"){
        setProfiledateofbirth(value);
    }else if(id === "telephone"){
        setProfilephonenumber(value);
    }else if(id === "mothersname"){
        setProfilemother(value);
    }else if(id === "fathersname"){
        setProfilefather(value);
    }else if(id === "numberofchildren"){
        setProfilenumberofchildren(value);
    }else if(id === "primaryeducation"){
        setProfileprimaryeducation(value);
    }else if(id === "secondayeducation"){
        setProfilesecondaryeducation(value);
    }else if(id === "tertiaryeducation"){
        setProfiletertiaryeducation(value);
    }else if(id === "hometown"){
        setProfilehometown(value);
    }
}

const handlebirth = (event:React.ChangeEvent<HTMLSelectElement>)=>{
   const value = event.target.value
   setProfileplaceofbirth(value);
}; 

const handlenationality = (event:React.ChangeEvent<HTMLSelectElement>)=>{
  const value = event.target.value
  setProfilenationality(value);
};

const handleoccupation = (event:React.ChangeEvent<HTMLSelectElement>)=>{
  const value = event.target.value
  setProfileoccupation(value); 
};

const handlemarital = (event:React.ChangeEvent<HTMLSelectElement>)=>{
  const value = event.target.value
  setProfilemaritalstatus(value);
};

const isEmpty = !profiluserId  || !profilegender || !profiledateofbirth || !profileplaceofbirth || !profileoccupation || !profilenationality || !profilephonenumber || !profilemother || !profilefather || !profilemaritalstatus || !profilenumberofchildren || !profileprimaryeducation || !profilesecondaryeducation || !profiletertiaryeducation || !profilehometown;


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

const maritalstatus = [{id:"1", name:"Single"}, {id:"2", name:"Married"}];

const occuption = [
  { id: "1", name: "Doctor" },
  { id: "2", name: "Engineer" },
  { id: "3", name: "Teacher" },
  { id: "4", name: "Software Developer" },
  { id: "5", name: "Chef" },
  { id: "6", name: "Graphic Designer" },
  { id: "7", name: "Nurse" },
  { id: "8", name: "Electrician" },
  { id: "9", name: "Marketing Specialist" },
  { id: "10", name: "Police Officer" },
  { id: "11", name: "Architect" },
  { id: "12", name: "Accountant" },
  { id: "13", name: "Journalist" },
  { id: "14", name: "Dentist" },
  { id: "15", name: "Mechanic" },
  { id: "16", name: "Psychologist" },
  { id: "17", name: "Pilot" },
  { id: "18", name: "Librarian" },
  { id: "19", name: "Pharmacist" },
  { id: "20", name: "Artist" },
  { id: "21", name: "Physiotherapist" },
  { id: "22", name: "Plumber" },
  { id: "23", name: "Web Designer" },
  { id: "24", name: "Social Worker" },
  { id: "25", name: "Financial Analyst" },
  { id: "26", name: "Veterinarian" },
  { id: "27", name: "Interior Designer" },
  { id: "28", name: "Translator" },
  { id: "29", name: "Hair Stylist" },
  { id: "30", name: "Biologist" },
  { id:"31", name:"others..." }
];

const country = [
  { id: "1", name: "Ghanaian" },
  { id: "2", name: "Nigerian" },
  { id: "3", name: "South African" },
  { id: "4", name: "Kenyan" },
  { id: "5", name: "Egyptian" },
  { id: "6", name: "Moroccan" },
  { id: "7", name: "Algerian" },
  { id: "8", name: "Ethiopian" },
  { id: "9", name: "Tanzanian" },
  { id: "10", name: "Ugandan" },
  { id: "11", name: "Angolan" },
  { id: "12", name: "Ivorian" },
  { id: "13", name: "Cameroonian" },
  { id: "14", name: "Senegalese" },
  { id: "15", name: "Mozambican" },
  { id: "16", name: "Madagascan" },
  { id: "17", name: "Zambian" },
  { id: "18", name: "Rwandan" },
  { id: "19", name: "Burundian" },
  { id: "20", name: "Namibian" },
  { id: "21", name: "Malawian" },
  { id: "22", name: "Malian" },
  { id: "23", name: "Somali" },
  { id: "24", name: "Sudanese" },
  { id: "25", name: "Botswanan" },
  { id: "26", name: "Liberian" },
  { id: "27", name: "Sierra Leonean" },
  { id: "28", name: "Chadian" },
  { id: "29", name: "Eritrean" },
  { id: "30", name: "Djiboutian" },
];

const handlecreation = async()=>{
   try{
    setloading(true);
    const response = await axios.post(import.meta.env.VITE_CREATPROFILE, {
      loginId:profiluserId,
      profilefirstname:profilefirstname,
      profilelastname:profilelastname,
      profileemail:profileemail,
      profilegender:profilegender,
      profiledateofbirth:profiledateofbirth,
      profileplaceofbirth:profileplaceofbirth,
      profileoccupation:profileoccupation,
      profilenationality:profilenationality,
      profilephonenumber:profilephonenumber,
      profilemother:profilemother,
      profilefather:profilefather,
      profilemaritalstatus:profilemaritalstatus,
      profilenumberofchildren:profilenumberofchildren,
      profileprimaryeducation:profileprimaryeducation,
      profilesecondaryeducation:profilesecondaryeducation,
      profiletertiaryeducation:profiletertiaryeducation,
      profilehometown:profilehometown,
    });

    if(response && response?.data?.code == 200){
    
        setSucessDisplay(true);
        setSuccessMessage(response?.data?.message);
        setprofileisupdate(response?.data?.data?.profileisupdate);
        setTimeout(()=>{
          setSucessDisplay(false);
          setSuccessMessage("");
        }, 3000);
    }

   }catch(err:any){
    console.error(err.response);
        setErrorDisplay(true);
        setErrorMessage(err.response?.data?.message);
        setTimeout(()=>{
          setErrorDisplay(false);
          setErrorMessage("");
        }, 3000);
   }finally{
    setloading(false);
   }
};

//fetching data
const handleFetch = async()=>{
  try{

    const response = await axios.post(import.meta.env.VITE_GETUSERSPROFILE, {
      loginid:Number(profiluserId)
    });

    if(response && response?.data?.code == 200){
  
      setProfilegender(response?.data?.data[0].profilegender);
      setProfiledateofbirth(moment(response?.data?.data[0].profiledateofbirth).format("").split('T')[0]);
      setProfileplaceofbirth(response?.data?.data[0].profileplaceofbirth);
      setProfileoccupation(response?.data?.data[0].profileoccupation);
      setProfilenationality(response?.data?.data[0].profilenationality);
      setProfilephonenumber(response?.data?.data[0].profilephonenumber);
      setProfilemother(response?.data?.data[0].profilemother);
      setProfilefather(response?.data?.data[0].profilefather);
      setProfilemaritalstatus(response?.data?.data[0].profilemaritalstatus);
      setProfilenumberofchildren(response?.data?.data[0].profilenumberofchildren);
      setProfileprimaryeducation(response?.data?.data[0].profileprimaryeducation);
      setProfilesecondaryeducation(response?.data?.data[0].profilesecondaryeducation);
      setProfiletertiaryeducation(response?.data?.data[0].profiletertiaryeducation);
      setProfilehometown(response?.data?.data[0].profilehometown);
      setprofileisupdate(response?.data?.data[0].profileisupdate);
    }

  }catch(err:any){
    console.error(err.response); 
  }finally{
    //do nothing
  }
}
//handle fetch
useEffect(()=>{handleFetch()},[]);

//handle update here
const handleupdate = async()=>{
  try{
    setloading(true);
    const response = await axios.post(import.meta.env.VITE_UPDATEUSERSPROFILE, {
      loginId: profiluserId,
      profilefirstname: profilefirstname ? profilefirstname : "",
      profilelastname: profilelastname ? profilelastname : "",
      profileemail: profileemail ? profileemail : "",
      profilegender: profilegender ? profilegender : "",
      profiledateofbirth:  profiledateofbirth ? profiledateofbirth.toString().split('T')[0] : "",
      profileplaceofbirth: profileplaceofbirth ? profileplaceofbirth : "",
      profileoccupation: profileoccupation ? profileoccupation : "",
      profilenationality: profilenationality ? profilenationality : "",
      profilephonenumber: profilephonenumber ? profilephonenumber : "", 
      profilemother: profilemother ? profilemother : "",
      profilefather: profilefather ? profilefather : "",
      profilemaritalstatus: profilemaritalstatus ? profilemaritalstatus : "",
      profilenumberofchildren: profilenumberofchildren ? profilenumberofchildren : "",
      profileprimaryeducation: profileprimaryeducation ? profileprimaryeducation : "",
      profilesecondaryeducation: profilesecondaryeducation ? profilesecondaryeducation : "",
      profiletertiaryeducation: profiletertiaryeducation ? profiletertiaryeducation : "",
      profilehometown: profilehometown ? profilehometown : "",
    });

    if(response && response?.data?.code == 200){
    
      setSucessDisplay(true);
      setSuccessMessage(response?.data?.message);
      setTimeout(()=>{
        setSucessDisplay(false);
        setSucessDisplay(false);
        setSuccessMessage("");
      }, 3000);
  }

  }catch(err:any){
    setErrorDisplay(true);
    setErrorMessage(err.response?.message);
    setTimeout(()=>{
      setErrorDisplay(false);
      setErrorMessage("");
    }, 3000);

  }finally{
    setloading(false);
  }
};

  return (
    <div className='w-full h-[92vh] p-2 pb-10 overflow-auto'>

    <div className="w-full p-2 flex ">
       <div className="w-1/2 font-bold">
          Profile
       </div>
       <div className="w-1/2 flex justify-end">
         {!profileisupdate ? <div className="lg:w-[30%] 2xl:w-[25%] max-sm:hidden sm:hidden lg:block">
            <Button 
              label="Add"
              styles="bg-cyan-300 p-2 w-full 
              text-white rounded
              flex justify-center shadow-md"
              loading={loading}
              onSubmit={handlecreation}
              disabled={isEmpty}
            />
         </div>
         :
         <div className="lg:w-[30%] 2xl:w-[25%] max-sm:hidden sm:hidden lg:block">
            <Button 
              label="Update"
              styles="bg-cyan-300 p-2 w-full 
              text-white rounded
              flex justify-center shadow-md"
              onSubmit={handleupdate}
              loading={loading}
            />
         </div>}

        {!profileisupdate ? <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
            <Button 
              label="+"
              styles="bg-cyan-300 p-2 w-full 
              text-white rounded
              flex justify-center"
              onSubmit={handlecreation}
              loading={loading}
              disabled={isEmpty}
            />
         </div>
         :
         <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
            <Button 
              label="Edit"
              styles="bg-cyan-300 p-2 w-full 
              text-white rounded
              flex justify-center"
              onSubmit={handleupdate}
              loading={loading}
            />
         </div>}
       </div>
    </div>

    <div className="w-full mt-5 p-2 flex justify-center">
       <div className="w-20 h-20 rounded-full shadow-md flex justify-center 
         items-center border-t-4 border-t-cyan-300 font-bold">
          {initials(profilefirstname+" "+profilelastname)}
       </div>
    </div>

    <div className="w-full 
     grid
     max-sm:grid-col-1
     sm:grid-col-1
     md:grid-col-1
     lg:grid-cols-3
     gap-2
     mt-5 p-2"
    >
   
      <Inputs 
        type="text"
        id="firstname"
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
        placeholder="Enter firstname here ..."
        labelOne="Firstname"
        value={profilefirstname}
        onChange={handleinputs}
        disabled
      /> 

      <Inputs 
        type="text"
        id="lastname"
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
        placeholder="Enter lastname here ..."
        labelOne="Lastname"
        value={profilelastname}
        onChange={handleinputs}
        disabled
       />   


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
        value={profileemail}
        onChange={handleinputs}
        disabled
       />    

    </div>

    <div className=" grid
     max-sm:grid-col-1
     sm:grid-col-1
     md:grid-col-1
     lg:grid-cols-3
     gap-2
     mt-5 p-2 ">
     <Inputs 
        type="text"
        id="gender"
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
        placeholder="Enter gender here ..."
        labelOne="Gender"
        value={profilegender}
        onChange={handleinputs}
       /> 

      <Inputs 
        type="date"
        id="dateofbirth"
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
        placeholder="Enter date of birth here ..."
        labelOne="Date Of Birth"
        value={profiledateofbirth}
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
        value={profileplaceofbirth}
        onChange={handlebirth}
       />

    </div>

    <div className=" grid
     max-sm:grid-col-1
     sm:grid-col-1
     md:grid-col-1
     lg:grid-cols-3
     gap-2
     mt-5 p-2 ">

      <Select 
        labelOne="Occupation"
        style='
        w-full border border-cyan-300 
        pl-10 p-2.5
        hover:border-cyan-300
        rounded-lg focus:outline-cyan-300  
        focus:ring-3 focus:ring-cyan-300  
        txt-field-style peer text-gray-900 
        text-sm block  dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
        data={occuption}
        placeholder="Select occupation here ..."
        value={profileoccupation}
        onChange={handleoccupation}
       />

      <Select 
        labelOne="Nationality"
        style='
        w-full border border-cyan-300 
        pl-10 p-2.5
        hover:border-cyan-300
        rounded-lg focus:outline-cyan-300  
        focus:ring-3 focus:ring-cyan-300  
        txt-field-style peer text-gray-900 
        text-sm block  dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
        data={country}
        placeholder="Select nationality here ..."
        value={profilenationality}
        onChange={handlenationality}
       />

      <Inputs 
        type="number"
        id="telephone"
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
        placeholder="Enter phone number here ..."
        labelOne="Phone number"
        value={profilephonenumber}
        onChange={handleinputs}
       /> 

     </div>

     <div className="w-full 
        grid
        max-sm:grid-col-1
        sm:grid-col-1
        md:grid-col-1
        lg:grid-cols-3
        gap-2
        mt-5 p-2"
      >

     <Inputs 
        type="text"
        id="mothersname"
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
        value={profilemother}
        onChange={handleinputs}
       /> 

      <Inputs 
        type="text"
        id="fathersname"
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
        labelOne="Fathers name"
        value={profilefather}
        onChange={handleinputs}
       /> 

      <Select 
        labelOne="Marital status"
        style='
        w-full border border-cyan-300 
        pl-10 p-2.5
        hover:border-cyan-300
        rounded-lg focus:outline-cyan-300  
        focus:ring-3 focus:ring-cyan-300  
        txt-field-style peer text-gray-900 
        text-sm block  dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
        data={maritalstatus}
        placeholder="Select marital status here ..."
        value={profilemaritalstatus}
        onChange={handlemarital}
       />

    </div>

    <div className="w-full 
        grid
        max-sm:grid-col-1
        sm:grid-col-1
        md:grid-col-1
        lg:grid-cols-3
        gap-2
        mt-5 p-2 "
    >
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
        labelOne="Number of children"
        value={profilenumberofchildren}
        onChange={handleinputs}
       /> 

      <Inputs 
        type="text"
        id="primaryeducation"
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
        value={profileprimaryeducation}
        onChange={handleinputs}
       />

      <Inputs 
        type="text"
        id="secondayeducation"
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
        placeholder="Enter seconday education here ..."
        labelOne="Secondary education"
        value={profilesecondaryeducation}
        onChange={handleinputs}
       />
    </div>

    <div className="w-full 
     grid
     max-sm:grid-col-1
     sm:grid-col-1
     md:grid-col-1
     lg:grid-cols-3
     gap-2
     mt-5 p-2 "
    >
       <Inputs 
        type="text"
        id="tertiaryeducation"
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
        value={profiletertiaryeducation}
        onChange={handleinputs}
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
        labelOne="Home town"
        value={profilehometown}
        onChange={handleinputs}
       /> 
    </div>
      
  </div>
  )
}

