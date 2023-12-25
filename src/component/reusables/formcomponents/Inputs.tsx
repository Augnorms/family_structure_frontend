import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

type InputsProps = {
    type: string;
    style: string;
    useIcons?:boolean;
    iconUser?:boolean;
    iconUserPass?:boolean;
    labelOne:string;
    labelTwo?:string;
    placeholder:string;
    addpasswordVisibility?:boolean;
    showPaswword?:boolean;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Inputs = (props:InputsProps) => {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between'>
          <label className='mb-2 font-bold'>
            {props.labelOne}
          </label>

          <label className='mb-2 font-bold'>
            {props.labelTwo}
          </label>
        </div>

        <div className="flex relative">
          {props.useIcons ? <div className="w-10 h-10 rounded-full shadow-md  mr-2 flex justify-center items-center">
          {props.iconUser ? <FaUser /> : props.iconUserPass ? <FaUserLock /> : ""}
          </div> : <div></div>}
          <input 
          type={props.type}
          className={props.style}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          />
          {props.addpasswordVisibility ? (
            <div className="flex items-center p-2 cursor-pointer position absolute top-0 right-0 mt-1">
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
