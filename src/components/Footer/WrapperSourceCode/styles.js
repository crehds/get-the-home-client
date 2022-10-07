import styled from '@emotion/styled';

export const WrapperSourceCode = styled.div`
  ${(props) =>
    props.pathname === '/'
      ? `display: flex;
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
        }`
      : `display: flex;
        flex-direction: column;
        gap: 0.8rem;
        & > div {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          & > div {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
        }`}
`;
