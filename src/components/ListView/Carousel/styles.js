import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 0 3.2rem;
  gap: 3.2rem;
  justify-items: center;
  height: 95%;
`;

export const CarouselButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 20px;
`;

export const CarouselButton = styled.button`
  ${(props) => chooseState(props.currentSlide, props.value)}
  border-radius: 4px;
  height: 31px;
  width: 31px;
`;

function chooseState(index, value) {
  if (index === value) {
    return `background-color: ${colors.shallowPink};
    border: 1px solid ${colors.darkPink};`;
  } else {
    return `background-color: ${colors.white};
    border: 1px solid ${colors.shallowGray};`;
  }
}
