import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { typography } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: ${colors.gray};
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    & p {
      ${typography.overline};
    }
    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
      & input {
        max-width: 102px;
      }
    }
  }
`;
