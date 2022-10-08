import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const CrPrForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  & h1 {
    ${typography.headline.l};
  }
`;

export const CrPrProperty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  & p {
    ${typography.overline};
  }
  & div {
    display: flex;
    gap: 1.6rem;
    padding: 0.8rem 0;
  }
`;

export const CrPrSpaces = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.6rem;
`;

export const CrPrPets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  & p {
    white-space: pre;
    ${typography.caption};
    color: ${colors.gray};
  }
`;

export const CrPrPhotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  h3 {
    ${typography.headline.xs};
  }
  & div {
    &:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    &:nth-of-type(2) {
      background-color: #f5f5f6;
      width: 100%;
      max-width: 60rem;
      height: 136px;
      padding: 0.8rem;
    }
  }
`;

export const CrPrPhPreviewEmpty = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: 0.8rem;
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    ${typography.caption};
    color: ${colors.gray};
  }
`;
