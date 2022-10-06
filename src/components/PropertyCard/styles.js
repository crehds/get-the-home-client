import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { shadow } from '../../styles/utils';

export const Wrapper = styled.div`
  width: 30rem;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  ${shadow.elevation1};
  color: ${colors.gray};
  & img {
    height: 20rem;
    object-fit: cover;
  }
  & > div.bottom-color {
    height: 0.7rem;
    background: ${colors.darkPink};
  }
`;
export const WrapperData = styled.div`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & > div.price-type {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  & > p {
    ${typography.subtitle.md};
    margin-bottom: 2.5rem;
    color: ${colors.darkGray};
  }
`;
export const WrapperPrice = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
  color: ${colors.darkGray};
  & p {
    ${typography.headline.s}
  }
`;
export const WrapperType = styled.div`
  display: flex;
  gap: 0.5rem;
  & p {
    ${typography.body.md}
  }
`;
export const WrapperOthers = styled.div`
  margin-top: auto;
  padding: 0.8rem;
  padding-top: 0;
  display: flex;
  gap: 1.8rem;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    & p {
      ${typography.body.md}
    }
  }
`;
