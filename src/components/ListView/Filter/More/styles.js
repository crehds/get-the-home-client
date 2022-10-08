import styled from '@emotion/styled';
import { typography } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    & p {
      ${typography.overline};
    }
    & div {
      align-items: center;
      flex-direction: row;
      & input {
        max-width: 102px;
      }
    }
  }
`;
