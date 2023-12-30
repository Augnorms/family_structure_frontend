import { DashboardComponent } from "../component/reusables/nonformcomponent/DashboardComponent"
import people from "../component/reusables/assets/people.svg";
import home from "../component/reusables/assets/home.svg";
import { Family_structure } from "../component/nonreusables/Family_structure";
import { Home } from "./Home";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import {loggedinInfoContext} from "../contextApi/LoggedInInforContext";
import { initials } from "../HelperFunction/functions";
import { Dropdown } from "../component/reusables/nonformcomponent/Dropdown";
import { LogoutNotifier } from "../component/reusables/nonformcomponent/LogoutNotifier";

interface dashComponent {
  dashContentname: string;
  components: React.ReactElement; // Corrected the type to React.ReactElement
}

export const Dashboard = () => {
 
  //context api
  const {firstname, lastname, notify} = useContext(loggedinInfoContext);

  const[show, setShow] = useState<boolean>(false);

  const handlearrows = ()=>{
    setShow(!show);
  }

  const sideContent = [
    {
     image:home,
     content:"Home"
    },
    {
      image:people,
      content:"Members"
    }
  ];

  const mainContent: dashComponent[] = [
    {
      dashContentname: "Home",
      components: <Home />,
    },
    {
      dashContentname: "Members",
      components: <Family_structure />,
    },
  ];

  const[dropnames, setDropnames] = useState<string>("");
  const handledropdown: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const id = event.currentTarget.id;
     if(id === "Home"){
      setDropnames(id);
      setShow(false);
     }else if(id === "Members"){
      setDropnames(id);
      setShow(false);
     }
  }

  return (
    <div className="w-full h-screen overflow-auto relative">
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

      {/*logout notifier*/}
      {notify === true ? <LogoutNotifier /> : <div></div>}
    </div>
  )
}
