import { Button } from "../reusables/formcomponents/Button"
import { Inputs } from "../reusables/formcomponents/Inputs"
import { Select } from "../reusables/formcomponents/Select"
import { ProfilesContext } from "../../contextApi/ProfileContext"
import { useContext } from "react"
import { initials } from "../../HelperFunction/functions"

export const Members = () => {

const {
    profiluserId, profilefirstname, profilelastname, profileemail,
    profilegender, profiledateofbirth, profileplaceofbirth,
    profileoccupation, profilenationality, profilephonenumber,
    profilemother, profilefather, profilemaritalstatus,
    profilenumberofchildren, profileprimaryeducation, profilesecondaryeducation,
    profiletertiaryeducation, profilehometown,
    setProfilefirstname, setProfilelastname, setProfileemail,
    setProfilegender, setProfiledateofbirth, setProfileplaceofbirth,
    setProfileoccupation, setProfilenationality, setProfilephonenumber,
    setProfilemother, setProfilefather, setProfilemaritalstatus,
    setProfilenumberofchildren, setProfileprimaryeducation, setProfilesecondaryeducation,
    setProfiletertiaryeducation, setProfilehometown
} = useContext(ProfilesContext);

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


  return (
    <div className='w-full h-[92vh] p-2 pb-10 overflow-auto'>

    <div className="w-full p-2 flex ">
       <div className="w-1/2 font-bold">
          Members
       </div>
       <div className="w-1/2 flex justify-end">
         <div className="lg:w-[30%] 2xl:w-[25%] max-sm:hidden sm:hidden lg:block">
            <Button 
              label="Add"
              styles="bg-cyan-300 p-2 w-full 
              text-white rounded
              flex justify-center shadow-md"
              
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
        data={[]}
        placeholder="Select place of birth here ..."
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
        data={[]}
        placeholder="Select occupation here ..."
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
        data={[]}
        placeholder="Select nationality here ..."
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
        data={[]}
        placeholder="Select marital status here ..."
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
