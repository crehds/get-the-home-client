import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  max-width: 60rem;
  width: 100%;
`;
export const SearchLabel = styled.label`
  color: ${colors.gray};
  ${typography.overline};
`;

// export const searchStyles = {
//   container: (styles) => ({
//     ...styles,
//     width: '100%',
//     '&:active': {
//       borderColor: 'green'
//     }
//   }),
//   control: (styles, { isSelected }) => {
//     return {
//       ...styles,
//       paddingLeft: 24,
//       color: isSelected ? colors.lightGray : colors.darkGray,
//       borderColor: colors.pink,
//       boxShadow: 'none',
//       '&:hover': {
//         borderColor: colors.darkPink
//       },
//       '&:active': {
//         borderColor: colors.darkPink
//       }
//     };
//   },
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? data.color
//         : isFocused
//         ? colors.shallowPink
//         : undefined,
//       color: isDisabled
//         ? 'pink'
//         : isSelected
//         ? 'gray' === data.color
//           ? 'white'
//           : 'black'
//         : colors.gray,
//       cursor: isDisabled ? 'not allowed' : 'default',
//       ':active': {
//         ...styles[':active'],
//         backgroundColor: !isDisabled
//           ? isSelected
//             ? colors.darkPink
//             : colors.pink
//           : undefined
//       }
//     };
//   },
//   indicatorSeparator: (styles) => ({
//     ...styles,
//     display: 'none'
//   })
// };
