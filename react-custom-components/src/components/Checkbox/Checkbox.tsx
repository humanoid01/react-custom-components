import { ReactNode } from 'react';
import { ColorType, Size } from '../../types/types';
import { CheckboxInput, IcnCheckbox, IcnContainer } from './Checkbox.styles';
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
  const inputSize = size;
  return (
    <IcnContainer
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
        />
      ) : (
        <CheckboxInput
          type='checkbox'
          checked={checked}
          onChange={onChange}
          color={color}
          inputSize={inputSize}
        />
      )}
      <span>{label}</span>
    </IcnContainer>
  );
};
const IconCheckbox = ({
  icon,
  checkedIcon,
  checked,
  color,
  onChange,
  style,
}: CheckboxProps) => {
  return (
    <IcnCheckbox onClick={onChange} color={color} style={style}>
      {checked ? checkedIcon : icon}
    </IcnCheckbox>
  );
};
