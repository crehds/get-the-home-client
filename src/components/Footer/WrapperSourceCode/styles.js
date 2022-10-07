import styled from '@emotion/styled';

export const WrapperSourceCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  & div {
    display: flex;
  }
  & > div {
    gap: 1.8rem;
    & > div {
      align-items: center;
      gap: 0.7rem;
    }
  }
`;


