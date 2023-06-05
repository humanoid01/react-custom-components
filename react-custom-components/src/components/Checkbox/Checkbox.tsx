import { ReactNode } from 'react';
import { ColorType, Size } from '../../types/types';
import {
  CheckboxInput,
  IcnCheckbox,
  CheckboxContainer,
} from './Checkbox.styles';
import { css } from '@emotion/react';

interface CheckboxProps {
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  checked?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  color?: ColorType;
  size?: Size;
  style?: object;
  label?: string;
}

export const Checkbox = ({
  icon,
  checkedIcon,
  checked,
  onChange,
  color,
  style,
  label,
  size,
}: CheckboxProps) => {
  return (
    <CheckboxContainer
      css={css`
        display: inline-flex;
        align-items: center;
      `}>
      {icon || checkedIcon ? (
        <IconCheckbox
          icon={icon}
          checkedIcon={checkedIcon}
          checked={checked}
          color={color}
          onChange={onChange}
          style={style}
          size={size}
        />
      ) : (
        <CheckboxInput
          type='checkbox'
          checked={checked}
          onChange={onChange}
          color={color}
          inputSize={size}
        />
      )}
      <span>{label}</span>
    </CheckboxContainer>
  );
};
const IconCheckbox = ({
  icon,
  checkedIcon,
  checked,
  color,
  onChange,
  style,
  size,
}: CheckboxProps) => {
  return (
    <IcnCheckbox
      onClick={onChange}
      color={color}
      style={style}
      inputSize={size}>
      {checked ? checkedIcon : icon}
    </IcnCheckbox>
  );
};
