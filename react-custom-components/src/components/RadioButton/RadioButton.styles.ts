import styled from '@emotion/styled';
import { Size } from '../../types/types';

interface InputRadioProps {
  inputSize?: Size;
}

interface InputRadioWrapperProps {
  inputSize?: Size;
}

const selectSize = (size: Size | undefined, text?: boolean): string => {
  if (size === 'small') return text ? '16px' : '20px';
  if (size === 'medium') return text ? '20px' : '26px';
  return text ? '24px' : '32px';
};

export const InputRadio = styled.input<InputRadioProps>`
  height: ${({ inputSize }) => selectSize(inputSize)};
  width: ${({ inputSize }) => selectSize(inputSize)};
  margin-top: -1px;
`;

export const InputRadioWrapper = styled.div<InputRadioWrapperProps>`
  display: flex;
  align-items: center;
  vertical-align: middle;
  gap: 10px;
  margin: 2px;
  font-size: ${({ inputSize }) => selectSize(inputSize, true)};
`;
