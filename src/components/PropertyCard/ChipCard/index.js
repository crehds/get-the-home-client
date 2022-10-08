import { colors } from '../../../styles/colors';
import { Wrapper } from './styles';
import { RiCoinsLine, RiMoneyDollarCircleFill } from 'react-icons/ri';

function ChipCard({ operationType }) {
  const label = operationType === 'rent' ? 'For rental' : 'For sale';
  const background = operationType === 'rent' ? colors.pink : colors.darkPink;
  const icon =
    operationType === 'rent' ? (
      <RiCoinsLine size="1.7rem" />
    ) : (
      <RiMoneyDollarCircleFill size="1.7rem" />
    );
  return (
    <Wrapper background={background}>
      {icon}
      <p>{label}</p>
    </Wrapper>
  );
}

export default ChipCard;
