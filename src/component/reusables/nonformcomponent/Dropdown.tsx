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
            <li id="Members" className="ml-4 hover:underline text-sky-500 cursor-pointer" onClick={props.onClick}>
                Members
            </li>

            <li id="Members" className="ml-4 hover:underline text-red-500 cursor-pointer" onClick={props.onLogout}>
                Logout
            </li>
        </ul>
        
    </div>
  )
}
