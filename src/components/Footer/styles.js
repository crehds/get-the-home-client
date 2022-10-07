import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const WrapperFooter = styled.div`
  & div.landing {
    ${typography.subtitle.s};
  }
  & div.otherPages {
    ${typography.body.s};
  }
  background: ${colors.background};
  border: 0.18rem solid ${colors.darkPink};
  display: flex;
  justify-content: center;
  & > div {
    width: calc(100vw - 26rem);
    padding: 1.6rem 3.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div.copyRight {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const WrapperAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0 0.8rem;
  }
  & img {
    width: 13.6rem;
  }
`;

export const WrapperTeam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: fit-content;
  & > p {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > div {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
  }
`;
