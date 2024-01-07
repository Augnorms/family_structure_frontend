import { ButtonSpinner } from "../reusables/nonformcomponent/ButtonSpinner";

interface memData{
  name:string;
  gender:string;
  hometown:string;
  mememail:string;
  memmother:string;
  memfather:string;
  memplaceofbirth:string;
}

interface Mamprops{
    data:memData[]
}

export const MembersTable = (props:Mamprops) => {
 
 

  return (
    <div className="w-full">

{props.data.length === 0 ? (
      <>
        <table className="w-full border rounded">
          <thead className="whitespace-nowrap bg-neutral-500 text-white">
            <tr className="">
              <th className="p-2 whitespace-nowrap text-start">name</th>
              <th className="p-2 whitespace-nowrap text-start">gender</th>
              <th className="p-2 whitespace-nowrap text-start">hometown</th>
              <th className="p-2 whitespace-nowrap text-start">email</th>
              <th className="p-2 whitespace-nowrap text-start">mother</th>
              <th className="p-2 whitespace-nowrap text-start">father</th>
            </tr>
          </thead>
        </table>
        <div className="w-full border p-2 flex justify-center">
          <ButtonSpinner />
        </div>
      </>
      ) : (
        <table className="w-full border rounded">
          <thead className="whitespace-nowrap bg-neutral-500 text-white">
            <tr className="">
              <th className="p-2 whitespace-nowrap text-start">name</th>
              <th className="p-2 whitespace-nowrap text-start">gender</th>
              <th className="p-2 whitespace-nowrap text-start">hometown</th>
              <th className="w-[20%] p-2 whitespace-nowrap text-start">email</th>
              <th className="p-2 whitespace-nowrap text-start">mother</th>
              <th className="p-2 whitespace-nowrap text-start">father</th>
            </tr>
          </thead>
          <tbody className="border">
            {props.data.map((user, idx) => (
              <tr className="border border-cyan-800 text-cyan-600" key={idx}>
                <td className="font-bold p-2 whitespace-nowrap text-start">{user.name}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start">{user.gender === '2' ? 'Female' : 'Male'}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.hometown}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.mememail}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.memmother}</td>
                <td className="font-bold p-2 whitespace-nowrap text-start text-ellipsis">{user.memfather}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
        
    </div>
  )
}
