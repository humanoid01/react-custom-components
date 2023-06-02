import { colors } from '../colors/colors';

export const getColor = (color: string | undefined): string => {
  if (color === undefined) return '#90caf9';

  if (colors[color]) return colors[color];

  return colors.primary;
};
