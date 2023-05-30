import React, { ReactNode, useState } from 'react';
import textField from './TextField.module.scss';
import { ColorType } from '../../types/types';
import { useId } from 'react';
interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined' | 'standard';
  color?: ColorType | string;
  helperText?: string;
  label?: string;
  type?: string;
  autoFocus?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  counter?: number;
  onFocus?: (e?: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLElement>) => void;
  className?: string;
  id?: string;
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
  onFocus,
  onBlur,
  className,
  id,
}: TextFieldProps) => {
  const [textCounter, setTextCounter] = useState(0);
  const textInputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (counter && inputValue.length <= counter) {
      setTextCounter(inputValue.length);
      onChange?.(e);
    }
    if (!counter) {
      onChange?.(e);
    }
  };

  const handleVariant = (
    variant: 'filled' | 'outlined' | 'standard' | undefined
  ) => {
    if (variant === 'filled') return textField.filled;
    if (variant === 'outlined') return textField.outlined;
    return textField.standard;
  };

  const handleSize = (size: 'small' | 'medium' | undefined) => {
    switch (size) {
      case 'small':
        return textField.small;
      case 'medium':
      default:
        return textField.medium;
    }
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
        return textField.secondary;
      case 'error':
        return textField.error;
      case 'info':
        return textField.info;
      case 'success':
        return textField.success;
      case 'warning':
        return textField.warning;
      case 'primary':
      default:
        return textField.primary;
    }
  };

  const handleCustomColor = (
    color: string | undefined
  ): {} | { color: string } => {
    if (!color) return {};

    const nonCustomColors = {
      primary: true,
      secondary: true,
      error: true,
      info: true,
      success: true,
      warning: true,
    };

    if (!(color in nonCustomColors))
      return { color: color, borderColor: color };

    return {};
  };

  return (
    <div
      className={`${textField.textField} ${value ? textField.active : ''} ${
        className ?? ''
      }`}>
      <div className={handleColor(color)} style={handleCustomColor(color)}>
        {startIcon && <div className={textField.startIcon}>{startIcon}</div>}
        {endIcon && <div className={textField.endIcon}>{endIcon}</div>}

        <input
          type={type ?? 'text'}
          className={`${handleVariant(variant)} ${handleSize(size)} ${
            startIcon ? textField.hasStartIcon : ''
          } ${endIcon ? textField.hasEndIcon : ''}`}
          value={value ?? ''}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          id={id ?? textInputId}
        />

        <label
          htmlFor={id ?? textInputId}
          className={`${startIcon ? textField.start : ''}`}>
          {label}
        </label>

        <div className={textField.flexRow}>
          <div> {helperText} </div>
          {counter && counter > 0 && (
            <div>
              {textCounter}/{counter}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
