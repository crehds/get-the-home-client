import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';

export const ActionsWrapper = styled.div`
  flex-grow: 1;
  padding: 3.2rem;
  & div {
    padding: 3.2rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    & p {
      ${typography.body.md};
      max-width: 14.2rem;
      margin: auto;
    }
    & button {
      align-self: center;
      ${typography.button};
    }
  }
`;
