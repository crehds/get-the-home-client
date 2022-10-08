import styled from '@emotion/styled';
import { typography } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Type = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  & div {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
`;

export const Label = styled.p`
  ${typography.overline};
`;
