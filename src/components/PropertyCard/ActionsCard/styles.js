import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const Wrapper = styled.div`
  height: 4.7rem;
  background: ${colors.darkPink};
  color: ${colors.white};
  ${typography.button};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
