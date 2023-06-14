import { Size } from '../../types/types';
import { InputRadio, InputRadioWrapper } from './RadioButton.styles';
import { useId } from 'react';

export interface Style {
  [key: string]: string;
}

interface RadioButtonProps {
  label?: string;
  size?: Size;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  name?: string;
  id?: string;
}

export const RadioButton = ({
  label,
  size,
  style,
  checked,
  onChange,
  disabled,
  value,
  name,
  id,
}: RadioButtonProps) => {
  const nonUserId = useId();
  const radioId = id ? id : nonUserId;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <InputRadioWrapper inputSize={size} style={style}>
      <InputRadio
        id={radioId}
        type='radio'
        inputSize={size}
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
        value={value}
        name={name}
      />
      {label && <label htmlFor={radioId}>{label}</label>}
    </InputRadioWrapper>
  );
};
