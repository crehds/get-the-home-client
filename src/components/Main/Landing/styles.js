import styled from '@emotion/styled';
import { shadow } from '../../../styles/utils';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div``;

//* Header
export const WrapperHeader = styled.div`
  width: 100%;
  height: 7.2rem;
  ${shadow.elevation1}
  display:flex;
  justify-content: center;
  position: relative;
`;
export const WrapperNav = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperUl = styled.div`
  display: flex;
  gap: 1.6rem;
  ${typography.button};
  list-style: none;
  padding: 0;
  margin: 0;
`;

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
export const WrapperProducts = styled.div``;
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
    text-align: center;
    gap: 3.2rem;
    & h4 {
      ${typography.headline.md};
    }
  }
`;
export const WrapperTeam = styled.div``;

//* Footer
export const WrapperFooter = styled.div``;
