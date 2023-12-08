import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";

type InputsProps = {
    type: string;
    style: string;
    labelOne:string;
    labelTwo?:string;
    placeholder:string;
    addpasswordVisibility?:Boolean;
    showPaswword?:Boolean;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Inputs = (props:InputsProps) => {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between'>
          <label className='mb-2 font-bold'>
            {props.labelOne}:
          </label>

          <label className='mb-2 font-bold'>
            {props.labelTwo}
          </label>
        </div>

        <div className="flex">
          <input 
          type={props.type}
          className={props.style}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          />
          {props.addpasswordVisibility ? (
            <div className="border border-[#d8dae5] flex items-center p-2 cursor-pointer">
              {props.showPaswword ?
                 <FiEye />
              :
                <GoEyeClosed />
              }
            </div>
          ) : null}
        </div>
    </div>
  )
}
