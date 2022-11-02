import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { shadow } from '../../styles/utils';

export const Wrapper = styled.div`
  width: 28rem;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  ${shadow.elevation1};
  background: ${colors.white};
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    text-align: center;
    color: ${colors.darkGray};
    & h3 {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      ${typography.headline.xs};
    }
    & p {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      ${typography.subtitle.s};
    }
  }
`;
