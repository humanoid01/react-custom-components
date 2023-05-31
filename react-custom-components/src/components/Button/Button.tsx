import { ReactNode } from 'react';
import button from './Button.module.scss';
import { ColorType } from '../../types/types';

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
  const getColor = (color: string | undefined): string => {
    if (color === undefined) return '#90caf9';
    const colors: { [key: string]: string } = {
      primary: '#90caf9',
      primaryLight: '#e3f2fd',
      primaryDark: '#42a5f5',

      secondary: '#ce93d8',
      secondaryLight: '#f3e5f5',
      secondaryDark: '#ab47bc',

      error: '#f44336',
      errorLight: '#e57373',
      errorDark: '#d32f2f',

      info: '#29b6f6',
      infoLight: '#4fc3f7',
      infoDark: '#0288d1',

      success: '#66bb6a',
      successLight: '#81c784',
      successDark: '#388e3c',

      warning: '#ffa726',
      warningLight: '#ffb74d',
      warningDark: '#f57c00',
    };

    if (colors[color]) return colors[color];

    return color;
  };

  let buttonStyle = {};

  if (variant === 'outlined') {
    buttonStyle = {
      ...buttonStyle,
      '--outlined-color': getColor(color),
    };
  } else if (variant === 'contained') {
    buttonStyle = {
      ...buttonStyle,
      '--contained-color': getColor(color),
    };
  } else if (variant === 'text') {
    buttonStyle = {
      ...buttonStyle,
      '--text-color': getColor(color),
    };
  }

  return (
    <div
      className={`${button.buttonWrapper} ${button[size ?? 'large']} ${
        button[variant ?? 'outlined']
      }`}
      style={buttonStyle}>
      {startIcon && <div className={button.startIcon}>{startIcon}</div>}
      <div>Label</div>
      {endIcon && <div className={button.endIcon}>{endIcon}</div>}
    </div>
  );
};
