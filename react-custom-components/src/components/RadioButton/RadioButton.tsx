import { Size } from '../../types/types';
import { InputRadio, InputRadioWrapper } from './RadioButton.styles';
import { useId } from 'react';

export interface Style {
  [key: string]: string;
}

interface RadioButtonProps {
  label?: string;
  size?: Size;
  style?: Style;
}

export const RadioButton = ({ label, size, style }: RadioButtonProps) => {
  const id = useId();
  return (
    <InputRadioWrapper inputSize={size} style={style}>
      <InputRadio id={id} type='radio' inputSize={size} />
      <label htmlFor={id}>{label}</label>
    </InputRadioWrapper>
  );
};
