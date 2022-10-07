import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div``;

//* Main
export const WrapperMain = styled.div``;
export const WrapperSearch = styled.div`
  display: flex;
  overflow: hidden;
  & div {
    width: 100%;
    margin-top: 6rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    & h1 {
      ${typography.headline.xl};
    }
    & p {
      ${typography.headline.s};
    }
  }
`;
export const WrapperProducts = styled.div`
  padding: 6.4rem 13.2rem;
  & > p {
    text-align: center;
    ${typography.subtitle.s};
    color: ${colors.darkGray};
  }
  & > h4 {
    text-align: center;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
    ${typography.headline.md};
    color: ${colors.darkPink};
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4.8rem;
  }
`;
export const WrapperSignup = styled.div`
  padding: 6.4rem 1rem;
  background: ${colors.shallowPink};
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 82.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3.2rem;
    & h4 {
      ${typography.headline.md};
    }
    & button {
      ${typography.button};
      border: none;
      width: fit-content;
    }
  }
`;
export const WrapperTeam = styled.div`
  padding: 6.4rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  & h3 {
    ${typography.headline.l};
    color: ${colors.darkPink};
  }
  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`;

