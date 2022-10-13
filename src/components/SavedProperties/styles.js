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

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Option = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.lightGray};
  border: none;
  background: none;
  &:hover {
    color: ${colors.darkGray};
  }
`;

