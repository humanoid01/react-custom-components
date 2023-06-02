import styled from '@emotion/styled';
import { getColor } from './../../utils/utils';

interface BtnProps {
  size?: string;
  variant?: string;
  color?: string;
}

interface VariantStyles {
  backgroundColor: string;
  border: string;
  color: string;
  hover: {
    backgroundColor: string;
  };
}

const selectSize = (size: string | undefined): string => {
  if (size === 'small') return '4px 10px';
  if (size === 'large') return '8px 22px';
  return '6px 16px';
};

function modifyHexOpacity(hex: string, opacity: number): string {
  const hexValue = hex.replace(/^#/, '');
  const alpha = Math.round(opacity * 255);
  const modifiedHex = hexValue + alpha.toString(16).padStart(2, '0');
  return `#${modifiedHex}`;
}

const selectStyle = (props: BtnProps): VariantStyles => {
  const currentColor = getColor(props.color);

  const contained: VariantStyles = {
    backgroundColor: currentColor,
    border: `1px solid ${currentColor}`,
    color: 'white',
    hover: {
      backgroundColor: modifyHexOpacity(currentColor, 0.3),
    },
  };

  const outlined: VariantStyles = {
    backgroundColor: 'transparent',
    border: `1px solid ${currentColor}`,
    color: currentColor,
    hover: {
      backgroundColor: modifyHexOpacity(currentColor, 0.3),
    },
  };

  const text: VariantStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: currentColor,
    hover: {
      backgroundColor: modifyHexOpacity(currentColor, 0.3),
    },
  };

  if (props.variant === 'text') return text;
  if (props.variant === 'outlined') return outlined;
  return contained;
};

export const Btn = styled.div<BtnProps>`
  border-radius: 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  outline: none;
  line-height: inherit;
  overflow: visible;
  vertical-align: middle;
  margin: 2px;
  cursor: pointer;
  padding: ${props => selectSize(props.size)};
  background-color: ${props => selectStyle(props).backgroundColor};
  border: ${props => selectStyle(props).border};
  color: ${props => selectStyle(props).color};
  :hover {
    background-color: ${props => selectStyle(props).hover.backgroundColor};
  }
`;

export const StartIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
`;

export const EndIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;
