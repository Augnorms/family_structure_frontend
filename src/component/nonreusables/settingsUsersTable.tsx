import React, { useContext, useEffect, useState } from "react";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { ButtonSpinner } from "../reusables/nonformcomponent/ButtonSpinner";
import axios from "axios";
import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";
import { ActionComp } from "../reusables/nonformcomponent/ActionComp";
import edit from "../reusables/assets/edit.svg";
import trash from "../reusables/assets/trash.svg";
import { blockContext } from "../../contextApi/BlockhandleContext";


const SettingsUsersTable: React.FC = () => {
  const { users, setUsers, setDialogue, setFirstname, setLastname, setEmail,
       setUsername, setAdmin, seteditMode, setDeleteAction, setDeleteIndicator, deleteAction, setUserEditid } = useContext(dashboardContext);

  const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext);

  const [showActionComp, setShowActionComp] = useState(false);
  const [hoveredUserId, setHoveredUserId] = useState<number | null>(null);
 
  const [deleteid, setDeleteid] = useState<number>(0);


  const handleAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getalluers");

      if (response && response?.data?.code === 200) {

        setUsers(response?.data?.data);
      }
    } catch (err: any) {
      if (err.response) {
        console.error(err.response);
      }
    }
  };

  const handleMouseEnter = (userId: number) => {
    setHoveredUserId(userId);
    setShowActionComp(true);
  };

  const handleMouseLeave = () => {
    setHoveredUserId(null);
    setShowActionComp(false);
  }

  useEffect(() => {
    handleAllUsers();
  }, []);



  //usee to handle actions fro table actions
  const handleactions = (label:string, id:number)=>{

    if(label === 'Edit'){
      setUserEditid(id);
      const userDetail = users.find((user)=>{
        return user.loginId === id
      });
      
      setUsername(userDetail?.username || "");
      setFirstname(userDetail?.firstname || "");
      setLastname(userDetail?.lastname || "");
      setEmail(userDetail?.email || "");
      setAdmin(String(userDetail?.isadmin) || "");
      seteditMode(true);
      setDialogue("user");

    }else if(label === 'Delete'){
      setDeleteid(id);
      setDialogue("delete");
      setDeleteIndicator("deleteuser");
    }
  };

  //delete function
  const handledelete = async()=>{
    try{
      
      const response = await axios.post("http://localhost:4000/deleteuser", {
            deleteId: deleteid
      });

     if(response && response?.data?.code == 200){
      setSucessDisplay(true);
      setSuccessMessage(response?.data?.message);
      setDialogue("");
      setTimeout(()=>{
        setSucessDisplay(false);
        setSuccessMessage("");
        setDeleteAction("");
        setDeleteIndicator("");
      },3000);
      handleAllUsers(); //fetch all users
    }

    }catch(err:any){
      if(err.response){
        setErrorDisplay(true);
        setErrorMessage(err.response?.data?.message);
        setTimeout(()=>{
         setErrorDisplay(false);
         setErrorMessage("");
       }, 3000);

      }
    }
  }

  //watch for deletion
useEffect(()=>{
  if(deleteAction === "deleteuser"){
    handledelete();
    setTimeout(()=>{
    setDeleteAction("");  
    setDeleteAction("");
    setDeleteIndicator("");
    }, 2000)

  }else if(deleteAction == ""){
    //do nothing
  }
},[deleteAction]);

  return (
    <div className="w-full">
       {users.length === 0 ? (
      <>
        <table className="w-full border rounded">
          <thead className="whitespace-nowrap bg-cyan-800 text-white">
            <tr className="">
              <th className="p-2 whitespace-nowrap text-center">id</th>
              <th className="p-2 whitespace-nowrap text-center">username</th>
              <th className="p-2 whitespace-nowrap text-center">firstname</th>
              <th className="p-2 whitespace-nowrap text-center">lastname</th>
              <th className="p-2 whitespace-nowrap text-center">email</th>
              <th className="p-2 whitespace-nowrap text-center">admin</th>
              <th className="p-2 whitespace-nowrap text-center">action</th>
            </tr>
          </thead>
        </table>
        <div className="w-full border border-red-500 p-2 flex justify-center">
          <ButtonSpinner />
        </div>
      </>
      ) : (
        <table className="w-full border rounded">
          <thead className="whitespace-nowrap bg-cyan-800 text-white">
            <tr className="">
              <th className="p-2 whitespace-nowrap text-start">id</th>
              <th className="p-2 whitespace-nowrap text-start">username</th>
              <th className="p-2 whitespace-nowrap text-start">firstname</th>
              <th className="p-2 whitespace-nowrap text-start">lastname</th>
              <th className="p-2 whitespace-nowrap text-start">email</th>
              <th className="p-2 whitespace-nowrap text-start">admin</th>
              <th className="p-2 whitespace-nowrap text-start">action</th>
            </tr>
          </thead>
          <tbody className="border">
            {users.map((user, idx) => (
              <tr className="border border-cyan-800" key={idx}>
                <td className="font-bold p-2 whitespace-nowrap text-start">{user.loginId}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start">{user.username}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.firstname}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.lastname}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.email}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.isadmin}</td>
                <td className="relative" 
                  onMouseEnter={() => handleMouseEnter(user.loginId)}
                  onMouseLeave={handleMouseLeave}>
                  <div className="w-full relative cursor-pointer actioncontrol">
                  <PiDotsThreeCircleVerticalDuotone  />
                  {hoveredUserId === user.loginId && showActionComp && (
                  <ActionComp
                    items={[
                      { id: user.loginId, label: "Edit", logo: edit },
                      { id: user.loginId, label: "Delete", logo: trash },
                    ]}
                    onClick={handleactions}
                  />
                )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default SettingsUsersTable;

