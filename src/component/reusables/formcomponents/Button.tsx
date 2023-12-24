import React from 'react';
import { ButtonSpinner } from '../nonformcomponent/ButtonSpinner';

type ButtonProps = {
  label: string;
  styles: string;
  disabled: boolean;
  loading?: boolean; // Add loading prop
};

export const Button = (props: ButtonProps) => {
  return (
    <div className="w-full flex relative">
      <button
        className={`${props.styles} ${
          props.disabled || props.loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        disabled={props.disabled || props.loading}
      >
        {props.loading ? <label className='mr-5'>
          spin...
        </label> : <div></div>}
        {props.label}
      </button>
    </div>
  );
};
