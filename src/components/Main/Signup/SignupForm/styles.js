import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { typography } from '../../../../styles/typography';
import { shadow } from '../../../../styles/utils';

export const WrapperSignupForm = styled.form`
  min-height: calc(100vh - 7.2rem - 12.98rem);
  background: linear-gradient(
    to bottom,
    ${colors.shallowPink} 50%,
    ${colors.white} 50% 100%
  );
  padding: 11.8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFormContainer = styled.div`
  padding: 1.6rem;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${shadow.elevation1};
  border-radius: 0.8rem;
  gap: 1.6rem;
  & h5 {
    text-align: center;
    ${typography.headline.s}
  }
  & input {
    min-width: 35.6rem;
    ${typography.body.s}
  }
`;
export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
