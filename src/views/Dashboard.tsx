import { DashboardComponent } from "../component/reusables/nonformcomponent/DashboardComponent"
import people from "../component/reusables/assets/people.svg";
import home from "../component/reusables/assets/home.svg";
import settings from "../component/reusables/assets/settings.svg";
import { Family_structure } from "../component/nonreusables/Family_structure";
import { Members } from "../component/nonreusables/Members";
import { Home } from "../component/nonreusables/Home";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import {loggedinInfoContext} from "../contextApi/LoggedInInforContext";
import {dashboardContext} from "../contextApi/DasboardstatesContext";
import { initials } from "../HelperFunction/functions";
import { Dropdown } from "../component/reusables/nonformcomponent/Dropdown";
import { LogoutNotifier } from "../component/reusables/nonformcomponent/LogoutNotifier";
import { Settings } from "../component/nonreusables/Settings";
import { useNavigate } from "react-router-dom";
import { Dialogue } from "../component/reusables/nonformcomponent/Dialogue";
import { AddUserForm } from "../component/nonreusables/AddUserForm";
import { SuccessBlock } from "../component/reusables/nonformcomponent/SuccessBlock";
import { ErrorBlock } from "../component/reusables/nonformcomponent/ErrorBlock";
import {blockContext} from "../contextApi/BlockhandleContext";
import heirarchy from "../component/reusables/assets/heirarchy.svg";
import { Heirarchical } from "../component/reusables/nonformcomponent/Heirarchical";

interface dashComponent {
  dashContentname: string;
  components: React.ReactElement; // Corrected the type to React.ReactElement
}

export const Dashboard = () => {
  const navigate = useNavigate(); 

  //context api
  const {firstname, lastname, notify, setNotify} = useContext(loggedinInfoContext);
  const {dialogue} = useContext(dashboardContext);
  const {succesdisplay, sucessmessage, errordisplay, erroMessage} = useContext(blockContext)

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
      image:heirarchy,
      content:"Hierarchy"
    },
    {
      image:people,
      content:"Profile"
    },
    {
      image:settings,
      content:"Settings"
    }
  ];

  const mainContent: dashComponent[] = [
    {
      dashContentname: "Home",
      components: <Home />,
    },
    {
      dashContentname: "Hierarchy",
      components: <Family_structure />,
    },
    {
      dashContentname: "Profile",
      components: <Members />,
    },
    
    {
      dashContentname: "Settings",
      components:<Settings />
    }
  ];

  const[dropnames, setDropnames] = useState<string>("");
  const handledropdown: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const id = event.currentTarget.id;
     if(id === "Home"){
      setDropnames(id);
      
     }else if(id === "Hierarchy"){
      setDropnames(id);
      setShow(false);

     }else if(id === "Profile"){
      setDropnames(id);
      setShow(false);

     }else if(id === "Settings"){
      setDropnames(id);
      setShow(false);
     }
  }

  const handleLogout:React.MouseEventHandler<HTMLLIElement> = (event)=>{
     const id = event.currentTarget.id
     if(id === 'Logout'){
      localStorage.setItem('token', "");
      localStorage.setItem('loggedid', "");
      localStorage.setItem('email', "");
      localStorage.setItem('firstname', "");
      localStorage.setItem('lastname', "");
      localStorage.setItem('isadmin', "");
      setNotify(false);
      setTimeout(()=>{navigate("/");},1000);
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
         {show ? <Dropdown onClick={handledropdown} onLogout={handleLogout}/> : ""}
      </div>

      <div className="">
        <DashboardComponent content={sideContent} components={mainContent} dropdown_name={dropnames}/>
      </div>

      {/*logout notifier*/}
      {notify === true ? <LogoutNotifier /> : <div></div>}

      {/*modal dialog display*/}

      {dialogue === "user" ? 
      <Dialogue>
        <AddUserForm />
      </Dialogue> : 
      <div></div>}

      <SuccessBlock blockControl={succesdisplay} message={sucessmessage}/>
      <ErrorBlock blockControl={errordisplay} message={erroMessage}/>
    </div>
  )
}
