import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const Wrapper = styled.div`
    min-height: calc(100vh - 7.2rem - 12.98rem);
    background: linear-gradient(
      to bottom,
      ${colors.shallowPink} 50%,
      ${colors.white} 50% 100%
    );
    padding-top: 6.4rem;
    padding-bottom: 18.9rem;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 5.7rem;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 5.7rem;
    }
    & div.cards{
      display: flex;
      justify-content: center;
      gap: 5.4rem;
    }
  }

  & h5 {
    ${typography.headline.s};
  }
  & h2 {
    ${typography.headline.xl};
  }
`;
