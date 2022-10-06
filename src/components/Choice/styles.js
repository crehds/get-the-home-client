import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 3.6rem;
  gap: 0.4rem;
  ${typography.body.s};
  color: ${colors.gray};
  position: relative;
  border: 1px solid ${colors.lightGray};
  ${({ theme }) => {
    if (theme.active) {
      return css`
        background-color: ${colors.pink};
      `;
    }
  }}
  & input[type='checkbox'] {
    appearance: none;
    position: absolute;
    &:checked {
      & + p {
        width: 100%;
        color: white;
      }
    }
  }
  & p {
    padding: 0.8rem 1.5rem;
  }
  &:first-of-type {
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  &:last-child {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;
