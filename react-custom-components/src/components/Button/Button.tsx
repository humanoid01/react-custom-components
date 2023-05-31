import { ReactNode } from 'react';
import button from './Button.module.scss';

interface ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ startIcon, endIcon, size }: ButtonProps) => {
  return (
    <div className={`${button.buttonWrapper} ${button[size ?? 'small']}`}>
      {startIcon ? <div className={button.startIcon}>{startIcon}</div> : ''}
      <div>Label</div>
      {endIcon ? <div className={button.endIcon}>{endIcon}</div> : ''}
    </div>
  );
};
