import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Wrapper = styled.div`
  width: 240px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  & div {
    width: 92px;
    display: flex;
    justify-content: space-between;
    & a {
      text-decoration: none;
      height: 1.25rem;
      color: ${colors.gray};
    }
  }
  & p {
    ${typography.headline[5]};
  }
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
`;
