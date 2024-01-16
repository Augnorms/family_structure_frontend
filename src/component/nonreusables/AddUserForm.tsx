import { IoIosCloseCircle } from "react-icons/io";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import {blockContext} from "../../contextApi/BlockhandleContext";
import { useContext, useEffect, useState } from "react";
import { Inputs } from "../reusables/formcomponents/Inputs";
import { Select } from "../reusables/formcomponents/Select";
import { Button } from "../reusables/formcomponents/Button";
import "../../settings.css";
import axios from "axios";

export const AddUserForm = () => {

 const {
    setDialogue, username, setUsername, email, setEmail,
    firstname, setFirstname, lastname, setLastname,
    password, setPassword, resetpass, setResetpass,
    admin, setAdmin, setUsers, editmode, seteditMode,
    useEditid
    } = useContext(dashboardContext);

  const {setSucessDisplay, setSuccessMessage, setErrorDisplay, setErrorMessage} = useContext(blockContext);  

const[showpass, setShowpass] = useState<boolean>(false);
const[showpassres, setShowpassres] = useState<boolean>(false);
const[passwordcheck, setpasswordcheck] = useState<boolean | null>(null);
const[loading, setloading] = useState<boolean>(false)
  
 const adminData = [
    {id:"1", name:"Admin"},
    {id:"0", name:"user"}
 ]

 const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
     const id = event.currentTarget.id
     if(id === "username"){
        setUsername(event.currentTarget.value);
     }else if(id === "firstname"){
        setFirstname(event.currentTarget.value);
     }else if(id === "lastname"){
        setLastname(event.currentTarget.value);
     }else if(id === "password"){
       setPassword(event.currentTarget.value);
     }else if(id === "repeatpassword"){
       setResetpass(event.currentTarget.value);
     }else if(id === "email"){
       setEmail(event.currentTarget.value);
     }
 }

 const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setAdmin(event.target.value);
 }

 const handlenewpass = ()=>{
    setShowpass(!showpass);
 }

 const handlerepeatpass = ()=>{
    setShowpassres(!showpassres);
 }

 useEffect(() => {
    if (password.length > 0 && resetpass.length > 0 && password.length === resetpass.length && password === resetpass) {
      setpasswordcheck(true);
    } else if (password.length > 0 && resetpass.length > 0 && password.length !== resetpass.length && password !== resetpass) {
      setpasswordcheck(false);
    } else {
      setpasswordcheck(null);
    }
  }, [password, resetpass]);

//fetch all users upon user creation
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

//rest api queries
const handlecreatuser = async()=>{
  try{
     setloading(true);

     const response = await axios.post("http://localhost:4000/createuser", {
      username: username,
      password:password,
      firstname:firstname,
      lastname:lastname,
      email:email,
      isadmin:admin
     })

     if(response && response?.data?.code == 201){
       //
        setSucessDisplay(true);
        setSuccessMessage(response?.data?.message);
        handleAllUsers();//fetch data
        setTimeout(()=>{
          setSucessDisplay(false);
          setSuccessMessage("");
        }, 3000);
        handleClose();
     }

  }catch(err:any){
     if(err.response){
       setErrorDisplay(true);
       setErrorMessage(err.response?.data?.message);
       setTimeout(()=>{
        setErrorDisplay(false);
        setErrorMessage("");
      }, 3000);
      handleClose();
     }
  }finally{
    setloading(false);
  }
};

//handle update
const handleupdate = async()=>{
   try{
    setloading(true);

    const response = await axios.put("http://localhost:4000/edituser",{
      editid:useEditid,
      username:username ? username : "",
      firstname:firstname ? firstname : "",
      lastname:lastname ? lastname : "",
      email:email ? email : "",
      isadmin:admin ? admin : 0
    })

    if(response && response?.data?.code == 200){
      //
       setSucessDisplay(true);
       setSuccessMessage(response?.data?.message);
       handleAllUsers();//fetch data
       setTimeout(()=>{
         setSucessDisplay(false);
         setSuccessMessage("");
       }, 3000);
       handleClose();
    }
    
   }catch(err:any){
    if(err.response){
      setErrorDisplay(true);
      setErrorMessage(err.response?.data?.message);
      setTimeout(()=>{
       setErrorDisplay(false);
       setErrorMessage("");
     }, 3000);
     handleClose();
    }
   }finally{
    setloading(false);
   }
}

//close function
 const handleClose = ()=>{
    setDialogue("");
    setUsername("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setResetpass("");
    setEmail("");
    setAdmin("");
    seteditMode(false);
 }

  return (
    <div className='w-full border-2 border-cyan-300 p-2 Container mx-auto'>
       <div className='
         w-[100%] border
         p-2 relative 
         bottom-10 mb-[-38px] 
         bg-white shadow-md
         rounded
         border-2 border-t-cyan-300
         text-center
         font-bold  
         flex
         '>
           <div className='w-[100%]'>AddUserForm</div>
           <div className='w-8 h-8 relative bottom-8 
             left-3 mb-[-10px] rounded-full 
             bg-white shadow-md flex justify-center items-center cursor-pointer'>
             <IoIosCloseCircle color={'red'} onClick={handleClose}/>
           </div>    
       </div>

       <div className="w-full h-[62vh] overflow-auto">
            <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-full">
                    <Inputs 
                    type="text"
                    id="username"
                    style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                    labelOne="Username"
                    placeholder="Enter username here..."
                    onChange={handleChange}
                    value={username}
                    />
                </div>
            </div>

            <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-1/2">
                    <Inputs 
                    type="text"
                    id="firstname"
                    style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                    labelOne="Firstname"
                    placeholder="Enter firstname here..."
                    onChange={handleChange}
                    value={firstname}
                    />
                </div>

                <div className="w-1/2">
                    <Inputs 
                    type="text"
                    id="lastname"
                    style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                    labelOne="Lastname"
                    placeholder="Enter lastname here..."
                    onChange={handleChange}
                    value={lastname}
                    />
                </div>
            </div>

            {!editmode && <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-1/2">
                        <Inputs 
                        type={showpass ? "text":"password"}
                        id="password"
                        style='
                            w-full border border-cyan-300
                            pl-10 p-2.5
                            hover:border-cyan-300
                            rounded-lg focus:outline-cyan-300 
                            focus:ring-3 focus:border-cyan-300 
                            txt-field-style peer text-gray-900 
                            text-sm block  dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                        labelOne="Password"
                        placeholder="Enter password here..."
                        addpasswordVisibility
                        onChange={handleChange} 
                        value={password}
                        showPaswword={showpass}
                        onShowpass={handlenewpass}
                        />
                </div>

                <div className="w-1/2">
                        <Inputs 
                        type={showpassres ? "text" : "password"}
                        id="repeatpassword"
                        style='
                            w-full border border-cyan-300
                            pl-10 p-2.5
                            hover:border-cyan-300
                            rounded-lg focus:outline-cyan-300 
                            focus:ring-3 focus:border-cyan-300 
                            txt-field-style peer text-gray-900 
                            text-sm block  dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                        labelOne="Repeatpassword"
                        placeholder="Enter repeatpassword here..."
                        addpasswordVisibility
                        onChange={handleChange}
                        value={resetpass}
                        showPaswword={showpassres}
                        onShowpass={handlerepeatpass}
                        />
                </div>

            </div>}
           
           {/*password checker*/}
            {passwordcheck !== null && (
            <div className={passwordcheck ? "w-full border mt-5 rounded p-1 bg-emerald-400" : "w-full border mt-5 rounded p-1 bg-red-600"}>
                {/* Content to be displayed inside the checker */}
            </div>
            )}


            <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-full">
                    <Inputs 
                    type="email"
                    id="email"
                    style='
                    w-full border border-cyan-300
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300 
                    focus:ring-3 focus:border-cyan-300 
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                    labelOne="Email"
                    placeholder="Enter email here..."
                    onChange={handleChange}
                    value={email}
                    />
                </div>
            </div>

            <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-full">
                    <Select 
                    labelOne='Administrator'
                    style='
                    w-full border border-cyan-300 
                    pl-10 p-2.5
                    hover:border-cyan-300
                    rounded-lg focus:outline-cyan-300  
                    focus:ring-3 focus:ring-cyan-300  
                    txt-field-style peer text-gray-900 
                    text-sm block  dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border-cyan-300'
                    data={adminData}
                    placeholder='Select your Admin'
                    onChange={handleSelect}
                    value={admin}
                    />
                </div>
            </div>

            <div className="w-full p-1 flex gap-2 mt-5">
                <div className="w-full">
                    {!editmode ? <Button label="add user"
                    styles="bg-cyan-300 p-2 w-full 
                    text-white rounded
                    flex justify-center
                    "
                    disabled={
                        username === "" ||
                        firstname === "" ||
                        lastname === "" ||
                        admin === "" ||
                        password === "" ||
                        resetpass === "" ||
                        (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                    }
                    loading={loading}
                    onSubmit={handlecreatuser}
                    />
                     :
                    <Button label="update user"
                      styles="bg-cyan-600 p-2 w-full 
                      text-white rounded
                      flex justify-center
                      "
                      disabled={
                          username === "" ||
                          firstname === "" ||
                          lastname === "" ||
                          admin === "" ||
                          (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                      }
                      loading={loading}
                      onSubmit={handleupdate}
                    />}
                </div>
            </div>
       </div>

    </div>
  )
}
