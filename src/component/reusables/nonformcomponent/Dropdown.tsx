import { CiLogout } from "react-icons/ci";
interface dropProps{
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    onLogout?:React.MouseEventHandler<HTMLLIElement>;
}

export const Dropdown = (props:dropProps) => {
  return (
    <div className="
      w-56 border 
      p-2 shadow-md 
      absolute 
      max-sm:right-2 
      sm:right-2
      md:right-8 
      lg:top-16 z-10 bg-white
      rounded
      ">

        <ul>
            <li id="Home" className="lg:hidden ml-4 hover:underline text-sky-500 cursor-pointer" onClick={props.onClick}>
                Home
            </li>

            <li id="Hierarchy" className="lg:hidden ml-4 hover:underline text-sky-500 cursor-pointer" onClick={props.onClick}>
                Hierarchy
            </li>

            <li id="Profile" className="lg:hidden ml-4 hover:underline text-sky-500 cursor-pointer" onClick={props.onClick}>
               Profile
            </li>

            <li id="Settings" className="lg:hidden ml-4 hover:underline text-sky-500 cursor-pointer" onClick={props.onClick}>
                Settings
            </li>

            <li id="Logout" className="ml-4 hover:underline text-red-500 cursor-pointer" onClick={props.onLogout}>
              <div className="flex">
                <div className="mt-[5px] mr-2"><CiLogout top={20}/></div> <p className="mb-2">Logout</p>
              </div>
            </li>
        </ul>
        
    </div>
  )
}
