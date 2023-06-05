import styled from '@emotion/styled';
import { ColorType, Size } from '../../types/types';
import { getColor } from './../../utils/utils';

interface IcnCheckboxProps {
  color?: ColorType;
  inputSize?: Size;
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

const selectSize = (size: Size | undefined): string => {
  if (size === 'small') return '20px';
  if (size === 'medium') return '30px';

  return '40px';
};

export const IcnCheckbox = styled.div<IcnCheckboxProps>`
  font-size: ${({ inputSize }) => selectSize(inputSize)};
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  padding: 6px;
  margin-right: 10px;
  color: ${({ color }) => getColor(color)};
  :hover {
    background-color: ${({ color }) => modifyHexOpacity(getColor(color), 0.15)};
  }
`;
export const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 4px;
  justify-content: center;
`;

export const CheckboxInput = styled.input<CheckboxInputProps>`
  width: ${({ inputSize }) => selectSize(inputSize)};
  height: ${({ inputSize }) => selectSize(inputSize)};
  margin-right: 16px;
`;
