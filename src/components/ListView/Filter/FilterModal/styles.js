import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

export const Wrapper = styled.div`
  padding: 0.8rem;
  gap: 1.6rem;
  position: absolute;
  left: 0;
  top: 50px;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  color: ${colors.gray};
  & button {
    align-self: flex-end;
  }
`;
