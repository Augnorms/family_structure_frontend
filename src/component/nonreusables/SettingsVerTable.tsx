import { useContext, useEffect } from "react";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { ButtonSpinner } from "../reusables/nonformcomponent/ButtonSpinner";
import axios from "axios";

export const SettingsVerTable = () => {

  const {verify, setVerify} = useContext(dashboardContext);

  const handleverificationdata = async()=>{
    try{
      const response = await axios.get("http://localhost:4000/getallverifications");

      if (response && response?.data?.code === 200) {

        setVerify(response?.data?.data);
      }

    }catch(err:any){
      console.error(err.response);
    }
  };

  useEffect(()=>{
    handleverificationdata();
  },[])

  return (
    <div className="w-full">
     { verify.length == 0 ? (
      <>
          <table className="w-full border rounded">
          <thead className="whitespace-nowrap bg-cyan-500 text-white">
            <tr className="">
              <th className="p-2 whitespace-nowrap text-center">id</th>
              <th className="p-2 whitespace-nowrap text-center">userid</th>
              <th className="p-2 whitespace-nowrap text-center">code</th>
              <th className="p-2 whitespace-nowrap text-center">expirationtime</th>
              <th className="p-2 whitespace-nowrap text-center">createdat</th>
              <th className="p-2 whitespace-nowrap text-center">action</th>
            </tr>
          </thead>
          </table>
          <div className="w-full border border-red-500 p-2 flex justify-center">
              <ButtonSpinner />
          </div>
      </>
     )
     :
      (<table className="w-full border rounded">
        <thead className="whitespace-nowrap bg-cyan-500 text-white">
          <tr className="">
            <th className="p-2 whitespace-nowrap text-center text-start">id</th>
            <th className="p-2 whitespace-nowrap text-center text-start">userid</th>
            <th className="p-2 whitespace-nowrap text-center text-start">code</th>
            <th className="w-[25%] p-2 whitespace-nowrap text-center text-start">expirationtime</th>
            <th className="w-[25%] p-2 whitespace-nowrap text-center text-start">createdat</th>
          </tr>
        </thead>
        <tbody>
          {verify.map((veriData, idx)=>(
           <tr className="border border-cyan-500" key={idx}>
            <td className="font-bold p-2 whitespace-nowrap text-start"> 
              {veriData.id}
            </td>
            <td className="font-bold p-2 whitespace-nowrap text-start"> 
              {veriData.user_id}
            </td>
            <td className="font-bold p-2 whitespace-nowrap text-start"> 
              {veriData.code}
            </td>
            <td className="font-bold p-2 whitespace-nowrap text-start"> 
              {veriData.expiration_time}
            </td>
            <td className="font-bold p-2 whitespace-nowrap text-start"> 
              {veriData.created_at}
            </td>
          </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  )
}
