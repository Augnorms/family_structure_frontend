import React, { useContext, useEffect } from "react";
import { dashboardContext } from "../../contextApi/DasboardstatesContext";
import { ButtonSpinner } from "../reusables/nonformcomponent/ButtonSpinner";
import axios from "axios";

const SettingsUsersTable: React.FC = () => {
  const { users, setUsers } = useContext(dashboardContext);

  const handleAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getalluers");

      if (response && response?.data?.code === 200) {

        setUsers(response?.data?.data);
      }
    } catch (err: any) {
      if (err.response) {
        console.log(err.response);
      }
    }
  };

  useEffect(() => {
    handleAllUsers();
  }, []);

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SettingsUsersTable;
