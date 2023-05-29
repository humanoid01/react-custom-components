import React, { useState } from 'react';
import './TextField.scss';
interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'outlined' | 'standard';
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | string;
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

  return (
    <div className={`text-field ${isFocused || value ? 'active' : ''}`}>
      <div className={handleColor(color)}>
        <input
          type='text'
          className={handleVariant(variant)}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <label>Label</label>
      </div>
    </div>
  );
};
