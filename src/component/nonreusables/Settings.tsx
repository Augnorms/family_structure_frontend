import { useContext, useEffect, useState } from "react"
import {loggedinInfoContext} from "../../contextApi/LoggedInInforContext";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { formatTime } from "../../HelperFunction/functions";
import { Button } from "../reusables/formcomponents/Button";
import  SettingsUsersTable  from "./settingsUsersTable";
import { SettingsVerTable } from "./SettingsVerTable";
import noEntry from "../reusables/assets/noEntry.svg";

export const Settings = () => {

const {tokenExp, setNotify} = useContext(loggedinInfoContext);
const {setDialogue, setTables, tables} = useContext(dashboardContext);

const [countdown, setCountdown] = useState<number>(0);


useEffect(() => {
  let intervalId: NodeJS.Timeout;

  if (tokenExp > 0) {
    setCountdown(Math.floor(tokenExp / 1000));

    intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;

        // Check if the remaining time is 5 minutes or less (300 seconds)
        if (newCountdown == 300) {
          // Use a callback function to setNotify to avoid the render phase error
          setNotify((prevNotify) => {
            if (!prevNotify) {
              return true;
            }
            return prevNotify;
          });
        }

        return newCountdown;
      });
    }, 1000);
  }

  // Cleanup function
  return () => {
    clearInterval(intervalId);
  };
}, [tokenExp, setNotify]);


  return (
    <div className='w-full h-[92vh] p-2 overflow-auto'>

      <div className="w-full p-2 flex">
        <div className="w-1/2 flex gap-2">
          <div className="w-[20%] max-sm:hidden sm:hidden md:hidden lg:block">
            <Button 
              label="add user"
              styles="bg-cyan-300 p-2 w-full 
                      text-white rounded
                      flex justify-center font-bold"
              onSubmit={() => setDialogue("user")}
            />
          </div>

          <div className="w-[20%] lg:hidden">
            <Button 
              label="+"
              styles="bg-cyan-300 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setDialogue("user")}
            />
          </div>

          <div className="w-[30%] max-sm:hidden sm:hidden lg:block">
            <Button 
              label="Add member"
              styles="bg-sky-400 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setDialogue("family")}
            />
          </div>

          <div className="w-[30%] max-sm:hidden sm:hidden lg:block">
            <Button 
              label="Add relation"
              styles="bg-cyan-700 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setDialogue("relation")}
            />
          </div>

          <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
            <Button 
              label="+"
              styles="bg-sky-4000 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setDialogue("family")}
            />
          </div>

          <div className="max-sm:w-[20%] sm:w-[20%] w-[10%] lg:hidden">
            <Button 
              label="+"
              styles="bg-cyan-700 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setDialogue("relation")}
            />
          </div>
        </div>


      
            <div className="w-1/2 flex justify-between">
              <div>
                
              </div>
              <p className="w-[30%]"><span className="font-bold">LoggedIn Time:</span> <span className="text-cyan-500 font-bold">{" "+formatTime(countdown)}</span></p>
            </div>
        </div>

        <div className="w-full p-2 flex justify-end gap-2">
          <div className="w-[10%] max-sm:hidden sm:hidden md:hidden lg:block">
            <Button
              label="users"
              styles="bg-cyan-800 p-2 w-full 
                      text-white rounded
                      flex justify-center font-bold"
              onSubmit={() => setTables("users")}
            />
          </div>

          <div className="w-[20%] lg:hidden">
            <Button
              label="-"
              styles="bg-cyan-800 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setTables("users")}
            />
          </div>

          {/*get verification codes*/}

          <div className="w-[10%] max-sm:hidden sm:hidden md:hidden lg:block">
            <Button
              label="verifications"
              styles="bg-teal-300 p-2 w-full 
                      text-white rounded
                      flex justify-center font-bold"
              onSubmit={() => setTables("verification")}
            />
          </div>

          <div className="w-[20%] lg:hidden">
            <Button
              label="-"
              styles="bg-teal-300 p-2 w-full 
                      text-white rounded
                      flex justify-center"
              onSubmit={() => setTables("verification")}
            />
          </div>
        </div>


        <div className="w-full h-[40vh] mt-5 p-2  overflow-auto">
          {tables === "users" ? <SettingsUsersTable /> :
          tables === "verification" ? <SettingsVerTable /> : 
          <SettingsUsersTable />}
        </div>

        

        <div className="w-full h-[40vh] mt-5 p-2 border overflow-auto">
           
        </div>
       
    </div>
  )
}
