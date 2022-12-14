import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { shadow } from '../../styles/utils';

export const WrapperHeader = styled.div`
  width: 100%;
  height: 7.2rem;
  ${shadow.elevation1}
  display:flex;
  justify-content: center;
  background: ${colors.white};
  position: relative;
`;
export const WrapperNav = styled.div`
  width: calc(100vw - 30.4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperUl = styled.div`
  display: flex;
  gap: 1.6rem;
  ${typography.button};
  list-style: none;
  padding: 0;
  margin: 0;
  & button {
    ${typography.button};
    border: none;
    align-items: center;
    width: fit-content;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
