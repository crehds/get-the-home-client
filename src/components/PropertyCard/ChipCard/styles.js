import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const Wrapper = styled.div`
  width: 11rem;
  display: flex;
  gap: 0.6rem;
  padding: 4px 8px;
  color: ${colors.white};
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  position: absolute;
  right: 0;
  & p {
    ${typography.body.s}
  }
`;
