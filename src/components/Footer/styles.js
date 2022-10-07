import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const WrapperFooter = styled.div`
  background: ${colors.background};
  ${typography.subtitle.s};
  border: 0.18rem solid ${colors.darkPink};
  display: flex;
  justify-content: center;
  & > div {
    width: 120rem;
    padding: 1.6rem 3.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div.copyRight {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const WrapperAbout = styled.div``;

export const WrapperTeam = styled.div``;
