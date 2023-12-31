import { ReactNode } from "react"

interface DialogueProps {
  children?: ReactNode;
}

export const Dialogue = ({children}:DialogueProps) => {

  return (
    <div
     className='
      w-full
      h-screen
      bg-zinc-400
      fixed
      top-0
      flex
      justify-center
      items-center
      bg-gray-400 
      bg-opacity-50
     '
     
    >

      <div className="max-sm:w-[80%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white p-2 shadow-md rounded">
         {children}
      </div>
        
    </div>
  )
}
