type ButtonProps = {
    label:string;
    styles:string;
    disabled:boolean;
}

export const Button = (props:ButtonProps) => {

  return (
    <div className="w-full">
       <button
        className={`${props.styles} ${props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        disabled={props.disabled}
       >
        {props.label}
       </button> 
    </div>
  )
}
