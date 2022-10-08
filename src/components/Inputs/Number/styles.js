import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const NumberLabel = styled.p`
  color: ${colors.gray};
  ${typography.overline};
`;

export const Label = styled.label`
  position: relative;
  & input[type='number'] {
    padding: 0.8rem;
    ${({ theme }) => {
      if (theme.icon) {
        return css`
          padding-left: 3.6rem;
        `;
      }
    }}
    border: 1px solid ${colors.pink};
    border-radius: 0.8rem;
    color: ${colors.darkGray};
    outline: none;
    &:focus {
      border: 1px solid ${colors.darkPink};
    }
    &::placeholder {
      color: ${colors.lightGray};
    }
    max-height: 38px;
  }
`;
