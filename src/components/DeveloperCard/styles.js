import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const Wrapper = styled.div`
  width: 24rem;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  & div {
    width: 9.5rem;
    display: flex;
    justify-content: space-between;
    & a {
      text-decoration: none;
      height: 2rem;
      color: ${colors.gray};
    }
  }
  & p {
    width: 100%;
    text-align: center;
    ${typography.headline.s};
  }
`;

export const Img = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 50%;
`;
