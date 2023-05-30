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
  counter?: number;
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
  counter,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textCounter, setTextCounter] = useState(0);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCounter = (text: string) => {
    if (counter) {
      if (text.length > counter) {
        setTextCounter(counter);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleCounter(inputValue);

    if (counter && inputValue.length > counter) {
      e.target.value = inputValue.substring(0, counter);
      setTextCounter(counter);
    } else {
      setTextCounter(inputValue.length);
    }

    onChange && onChange(e);
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
          onChange={handleChange}
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
        {counter ? (
          <label className='label-counter'>
            {textCounter}/{counter}
          </label>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
