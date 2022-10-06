import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const SmallButton = styled.button`
  display: flex;
  gap: 0.8rem;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  color: ${colors.gray};
  border: none;
  ${typography.button};
  align-items: center;
  &.primary {
    background-color: ${colors.pink};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.darkPink};
    }
  }
  &.secondary {
    border: 1px solid ${colors.pink};
    &:hover {
      color: ${colors.darkGray};
      border: 1px solid ${colors.darkPink};
      background-color: ${colors.shallowPink};
    }
  }
  &.ghost {
    color: ${colors.gray};
    &:hover {
      background-color: ${colors.shallowPink};
      color: ${colors.darkGray};
    }
  }
  &:disabled {
    color: ${colors.shallowGray};
    background-color: ${colors.lightGray};
  }
`;

export const DefaultButton = styled.button`
  border-radius: 1.6rem;
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  color: ${colors.gray};
  border: none;
  align-items: center;
  ${typography.button};
  &.primary {
    background-color: ${colors.pink};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.darkPink};
    }
  }
  &.secondary {
    border: 1px solid ${colors.pink};
    &:hover {
      color: ${colors.darkGray};
      border: 1px solid ${colors.darkPink};
      background-color: ${colors.shallowPink};
    }
  }
  &.ghost {
    color: ${colors.gray};
    &:hover {
      background-color: ${colors.shallowPink};
      color: ${colors.darkGray};
    }
  }
  &:disabled {
    color: ${colors.shallowGray};
    background-color: ${colors.lightGray};
  }
`;

export const LargeButton = styled.button`
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${colors.gray};
  padding: 1.6rem 2.4rem;
  border: none;
  ${typography.button};
  &.primary {
    background-color: ${colors.pink};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.darkPink};
    }
  }
  &.secondary {
    border: 1px solid ${colors.pink};
    &:hover {
      color: ${colors.darkGray};
      border: 1px solid ${colors.darkPink};
      background-color: ${colors.shallowPink};
    }
  }
  &.ghost {
    color: ${colors.gray};
    &:hover {
      background-color: ${colors.shallowPink};
      color: ${colors.darkGray};
    }
  }
  &:disabled {
    color: ${colors.shallowGray};
    background-color: ${colors.lightGray};
  }
`;
