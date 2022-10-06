import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;

export const SelectLabel = styled.label`
  ${typography.overline};
  color: ${colors.gray};
`;

export const colourStyles = {
  container: (styles) => ({
    ...styles,
    width: '100%',
    fontSize: '16px',
    minWidth: '120px'
  }),
  control: (styles, { isSelected }) => ({
    ...styles,
    color: isSelected ? colors.lightGray : colors.darkGray,
    borderColor: colors.pink,
    boxShadow: 'none',
    '&:hover': {
      borderColor: colors.darkPink
    },
    '&:active': {
      borderColor: colors.darkPink
    }
  }),
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
  indicatorSeparator: (styles) => ({
    display: 'none'
  }),
  valueContainer: (styles) => ({
    ...styles,
    '& > div:first-child': {
      maxWidth: 'fit-content'
    }
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: colors.shallowPink,
    maxWidth: '99px'
  }),
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
