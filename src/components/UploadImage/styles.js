import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & label {
    ${typography.overline};
    color: ${colors.darkGray};
  }
  & div {
    position: relative;
  }
  & input[type='file']::file-selector-button {
    background-color: ${colors.pink};
    border-radius: 0.8rem;
    overflow: hidden;
    padding: 8px 8px 8px 36px;
    border: none;
    cursor: pointer;
    color: ${colors.white};
    ${typography.body.s};
  }
`;

export const CaptionText = styled.p`
  color: ${colors.lightGray};
  ${typography.caption};
`;
