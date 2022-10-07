import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const InfoWrapper = styled.div`
  flex-grow: 2.86;
`;

export const ImgsCarousel = styled.div`
  padding: 6.4rem;
  & .carousel {
    margin: auto;
    & figure {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 384px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
`;

export const GeneralDetails = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  & div {
    h4 {
      ${typography.headline.md};
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
    p {
      ${typography.subtitle.md};
    }
    &:nth-of-type(2) {
      p {
        text-align: right;
      }
    }
  }
`;

export const BuildingDetails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 1.6rem 0;
  border-top: 1px solid ${colors.pink};
  border-bottom: 1px solid ${colors.pink};
  & div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & h6 {
    color: ${colors.darkPink};
    ${typography.headline.xs};
  }
  & p {
    ${typography.body.md};
    color: ${colors.darkGray};
    white-space: pre-wrap;
  }
`;

export const MapDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & h6 {
    color: ${colors.darkPink};
    ${typography.headline.xs};
  }
  & p {
    ${typography.body.md};
    color: ${colors.darkGray};
    white-space: pre-wrap;
  }
  & div {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 760px;
    & iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
`;
