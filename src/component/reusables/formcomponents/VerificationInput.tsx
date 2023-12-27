interface inputProps{
    valueone:string;
    valuetwo:string;
    valuethree:string;
    valuefour:string;
    valuefive:string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    display?:boolean
}


export const VerificationInput = (props:inputProps) => {
  return (
   <div className="w-full text-center mt-5">
     {props.display ? <p className="text-cyan-500 p-2">Enter your five(5) digit number here</p>:<></>} 

    <div className='w-full p-2 flex justify-center'>
       {props.display ? <div className='p-2 flex gap-10'>
          <div className='w-5 h-5 flex justify-center items-center rounded-lg'>
            <input 
              type="text"
              id={"firstnumber"}
              onChange={props.onChange}
              className='
               w-10 h-10 
               border border-cyan-200
               text-center
               rounded-lg focus:outline-cyan-300
               focus:ring-3 focus:border-cyan-300
               shadow-md
               '
               value={props.valueone}
            />
          </div>

          <div className='w-5 h-5 flex justify-center items-center rounded-lg'>
            <input 
              type="text"
              id={"secondnumber"}
              onChange={props.onChange}
              className='
               w-10 h-10 
               border border-cyan-200
               text-center
               rounded-lg focus:outline-cyan-300
               focus:ring-3 focus:border-cyan-300
               shadow-md
               '
               value={props.valuetwo}
            />
          </div>

          <div className='w-5 h-5 flex justify-center items-center rounded-lg'>
            <input 
              type="text"
              id={"thirdnumber"}
              onChange={props.onChange}
              className='
               w-10 h-10 
               border border-cyan-200
               text-center
               rounded-lg focus:outline-cyan-300
               focus:ring-3 focus:border-cyan-300
               shadow-md
               '
               value={props.valuethree}
            />
          </div>

          <div className='w-5 h-5 flex justify-center items-center rounded-lg'>
            <input 
              type="text"
              id={"forthnumber"}
              onChange={props.onChange}
              className='
               w-10 h-10 
               border border-cyan-200
               text-center
               rounded-lg focus:outline-cyan-300
               focus:ring-3 focus:border-cyan-300
               shadow-md
               '
               value={props.valuefour}
            />
          </div>

          <div className='w-5 h-5 flex justify-center items-center rounded-lg'>
          <input
            type="text"
            id={"fifthnumber"}
            onChange={props.onChange}
            className='
                w-10 h-10 
                border border-cyan-200
                text-center
                rounded-lg focus:outline-cyan-300
                focus:ring-3 focus:border-cyan-300
                shadow-md
            '
             value={props.valuefive}
            />
          </div>
       </div> 
       :
       <div></div>
       }
    </div>
  </div>  
  )
}
