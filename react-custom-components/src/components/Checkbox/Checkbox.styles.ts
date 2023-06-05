import styled from '@emotion/styled';
import { ColorType, Size } from '../../types/types';
import { getColor } from './../../utils/utils';

interface IcnCheckboxProps {
  color?: ColorType;
}

interface CheckboxInputProps {
  inputSize?: Size;
}

function modifyHexOpacity(hex: string, opacity: number): string {
  const hexValue = hex.replace(/^#/, '');
  const alpha = Math.round(opacity * 255);
  const modifiedHex = hexValue + alpha.toString(16).padStart(2, '0');
  return `#${modifiedHex}`;
}

const selectSize = (size: Size): string => {
  return '';
};

export const IcnCheckbox = styled.div<IcnCheckboxProps>`
  font-size: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  padding: 16px;
  color: ${({ color }) => getColor(color)};
  :hover {
    background-color: ${({ color }) => modifyHexOpacity(getColor(color), 0.15)};
  }
`;
export const IcnContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const CheckboxInput = styled.input<CheckboxInputProps>`
  transform: scale(3);
  margin-right: 16px;
`;
