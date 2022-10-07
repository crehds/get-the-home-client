import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => {
    if (theme.withPadding) {
      return css`
        padding: 0 12rem;
      `;
    }
  }}
`;
