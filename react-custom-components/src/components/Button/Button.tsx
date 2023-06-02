import { ReactNode } from 'react';
import { ColorType } from '../../types/types';
import { Btn, EndIcon, StartIcon } from './Button.styles';
interface ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'text' | 'outlined';
  color?: ColorType;
}

export const Button = ({
  startIcon,
  endIcon,
  size,
  variant,
  color,
}: ButtonProps) => {
  return (
    <Btn size={size} variant={variant} color={color}>
      {startIcon && <StartIcon> {startIcon} </StartIcon>}
      <div>Label</div>
      {endIcon && <EndIcon> {endIcon} </EndIcon>}
    </Btn>
  );
};
