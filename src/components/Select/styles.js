import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const SelectLabel = styled.label`
  ${typography.overline};
  color: ${colors.gray};
`;

export const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: colors.white }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? colors.shallowPink
        : undefined,
      color: isDisabled
        ? 'pink'
        : isSelected
        ? 'gray' === data.color
          ? 'white'
          : 'black'
        : colors.gray,
      cursor: isDisabled ? 'not allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? colors.darkPink
            : colors.pink
          : undefined
      }
    };
  },
  multiValue: (styles, { data }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: colors.shallowPink,
      maxWidth: '116px'
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: colors.gray,
    ':hover': {
      backgroundColor: 'none',
      color: colors.darkGray
    }
  })
};
