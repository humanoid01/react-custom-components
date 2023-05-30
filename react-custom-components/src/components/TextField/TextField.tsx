import React, { ReactNode, useState } from 'react';

import './TextField.scss';
interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined' | 'standard';
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | string;
  helperText?: string;
  label?: string;
  type?: string;
  autoFocus?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const TextField = ({
  value,
  onChange,
  disabled,
  placeholder,
  size,
  required,
  variant,
  color,
  helperText,
  label,
  type,
  autoFocus,
  startIcon,
  endIcon,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleVariant = (
    variant: 'filled' | 'outlined' | 'standard' | undefined
  ) => {
    if (variant === 'filled') return 'filled';
    if (variant === 'outlined') return 'outlined';
    return 'standard';
  };

  const handleColor = (
    color:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | string
      | undefined
  ): string => {
    switch (color) {
      case 'secondary':
        return 'secondary';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'primary':
        return 'primary';

      default:
        return 'primary';
    }
  };

  const handleSize = (size: 'small' | 'medium' | undefined) => {
    switch (size) {
      case 'small':
        return 'small';
      case 'medium':
        return 'medium';
      default:
        return 'medium';
    }
  };

  const inputStyles = {
    paddingLeft: startIcon ? '32px' : '',
    paddingRight: endIcon ? '32px' : '',
  };

  return (
    <div className={`text-field ${isFocused || value ? 'active' : ''}`}>
      <div className={`${handleColor(color)}`}>
        {startIcon && <div className='start-icon'>{startIcon}</div>}
        {endIcon && <div className='end-icon'>{endIcon}</div>}
        <input
          type={type ? type : 'text'}
          className={`${handleVariant(variant)} ${handleSize(size)}`}
          value={value ? value : ''}
          style={inputStyles}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
        />
        <label
          className={`
            ${handleVariant(variant) === 'outlined' ? 'label-center' : ''} ${
            startIcon ? 'label-start' : ''
          } 
          `}>
          {label}
        </label>
        <label className='label-help'> {helperText} </label>
      </div>
    </div>
  );
};
