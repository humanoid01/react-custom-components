import { ReactNode } from 'react';
import { ColorType } from '../../types/types';
import { Btn, EndIcon, StartIcon } from './Button.styles';
import { css } from '@emotion/react';
interface ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'text' | 'outlined';
  color?: ColorType;
  style?: object;
  href?: string;
  target?: string;
  label?: string;
  disabled?: boolean;
}

export const Button = ({
  startIcon,
  endIcon,
  size,
  variant,
  color,
  style,
  href,
  target,
  label,
  disabled,
}: ButtonProps) => {
  return (
    <Btn
      size={size}
      variant={variant}
      color={color}
      style={style}
      disabled={disabled}>
      {startIcon && <StartIcon> {startIcon} </StartIcon>}
      <a
        href={href}
        target={target}
        css={css`
          color: inherit;
          text-decoration: none;
        `}>
        {label?.toUpperCase()}
      </a>
      {endIcon && <EndIcon> {endIcon} </EndIcon>}
    </Btn>
  );
};
