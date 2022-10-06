import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const Label = styled.label`
  ${typography.body.s};
  display: grid;
  grid-template-columns: 2em auto;
  gap: 0.4rem;
  color: ${colors.gray};
  & input[type='checkbox'] {
    appearance: none;
    font: inherit;
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid ${colors.pink};
    background-color: white;
    padding: 4px;
    display: grid;
    place-content: center;
    &:checked {
      background-color: ${colors.pink};
      &::before {
        transform: scale(1);
      }
    }
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1rem 1rem white;
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
  }
`;
