import { DashboardComponent } from "../component/reusables/nonformcomponent/DashboardComponent"
import people from "../component/reusables/assets/people.svg";
import { Family_structure } from "../component/nonreusables/Family_structure";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import {loggedinInfoContext} from "../contextApi/LoggedInInforContext";
import { initials } from "../HelperFunction/functions";
import { Dropdown } from "../component/reusables/nonformcomponent/Dropdown";

export const Dashboard = () => {
 
  //context api
  const {firstname, lastname} = useContext(loggedinInfoContext);

  const[show, setShow] = useState<boolean>(false);

  const handlearrows = ()=>{
    setShow(!show);
  }

  const sideContent = [
    {
      image:people,
      content:"Members"
    }
  ];

  const mainContent = [
    {
      dashContentname:"Members",
      components:<Family_structure />
    }
  ];

  const[dropnames, setDropnames] = useState<string>("");
  const handledropdown: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const id = event.currentTarget.id;
     if(id === "Members"){
      setDropnames(id);
      setShow(false);
     }
  }

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="md:flex-wrap lg:flex  shadow-md p-2 ">
         <div className="lg:w-1/2 shadow-sm rounded p-2 flex">
            <FaSun size={30}/>
            <div className="ml-3 mt-1 font-bold">{`Welcome`}
              <span className="font-bold text-cyan-600">
                {` (${firstname} ${lastname})`}
              </span>
            </div>
         </div>
         <div className="lg:w-1/2 shadow-sm rounded p-2 flex justify-end">
            <div className="w-20 flex justify-between">
              <div className="w-16 h-10 rounded-full shadow-md flex justify-center items-center font-bold">
                {initials(firstname+" "+lastname)}   
              </div>
              <div className="flex ml-2 items-center cursor-pointer">
                 {show ? <IoMdArrowDropdown onClick={handlearrows}/> : <IoMdArrowDropup onClick={handlearrows}/>}
              </div>  
            </div>
         </div>
         {show ? <Dropdown onClick={handledropdown}/> : ""}
      </div>

      <div className="">
        <DashboardComponent content={sideContent} components={mainContent} dropdown_name={dropnames}/>
      </div>
    </div>
  )
}
