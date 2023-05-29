import React, { useState } from 'react';
import './TextField.scss';

interface TextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const TextField = ({
  value,
  onChange,
  disabled,
  placeholder,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`text-field ${isFocused || value ? 'active' : ''}`}>
      <input
        type='text'
        className='standard'
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      <label>Label</label>
    </div>
  );
};
