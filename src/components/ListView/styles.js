import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const PropertiesFound = styled.h6`
  ${typography.headline.xs};
  color: ${colors.gray};
`;
