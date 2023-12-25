import { ButtonSpinner } from '../nonformcomponent/ButtonSpinner';

type ButtonProps = {
  label: string;
  styles: string;
  disabled?: boolean;
  loading?: boolean; // Add loading prop
};

export const Button = (props: ButtonProps) => {
  return (
    <div className="w-full">
      <button
        className={`${props.styles} ${
          props.disabled || props.loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        disabled={props.disabled || props.loading}
      >
        {props.loading ? <div className='mr-5'>
         <ButtonSpinner size='small'/>
        </div> : <div></div>}
        <div className='w-[70%]'>{props.label}</div>
      </button>
    </div>
  );
};
