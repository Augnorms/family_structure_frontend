import { ButtonSpinner } from '../nonformcomponent/ButtonSpinner';

type ButtonProps = {
  label: string;
  styles: string;
  disabled?: boolean;
  loading?: boolean; // Add loading prop
  onSubmit?:()=>void
};

export const Button = (props: ButtonProps) => {
  return (

      <button
        className={`${props.styles} ${
          props.disabled || props.loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        disabled={props.disabled || props.loading}
        onClick={props.onSubmit}
      >
        {props.loading ? <div className='mr-5'>
         <ButtonSpinner size='small'/>
        </div> : <div></div>}
        <div className=''>{props.label}</div>
      </button>
 
  );
};
