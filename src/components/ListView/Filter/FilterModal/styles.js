import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

export const Wrapper = styled.div`
  padding: 0.8rem;
  gap: 1.6rem;
  position: absolute;
  ${({ theme }) => css`
    left: ${theme.posX};
  `}
  top: 50px;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  color: ${colors.gray};
  z-index: 10;
  & button {
    align-self: flex-end;
  }
`;
