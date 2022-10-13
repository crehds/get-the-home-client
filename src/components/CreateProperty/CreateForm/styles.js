import styled from '@emotion/styled';
import { Form } from 'formik';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const CrPrForm = styled(Form)`
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
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  gap: 1.6rem;
`;

export const EmptyWrapper = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  max-width: 60rem;
  height: 136px;
  display: flex;
  padding: 0.8rem;
  gap: 1rem;
  & img {
    width: 120px;
    /* object-fit: 50px; */
    height: auto;
  }
`;

export const CrPrPhPreviewEmpty = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: 0.8rem;
  width: 12rem;
  height: 12rem;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  & p {
    ${typography.caption};
    color: ${colors.gray};
  }
`;
