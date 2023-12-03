

type InputsProps = {
    type: string;
    style: string;
    labelOne:string;
    labelTwo?:string;
    placeholder:string;
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

        <input 
         type={props.type}
         className={props.style}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange}
        />
    </div>
  )
}
