import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const Wrapper = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    & h3 {
      ${typography.head.xs};
    }
    & p {
      ${typography.subtitle.s};
    }
  }
`;
