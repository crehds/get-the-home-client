import {
  Wrapper,
  WrapperData,
  WrapperOthers,
  WrapperPrice,
  WrapperType
} from './styles';
import { RiMoneyDollarCircleLine, RiBuildingLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';
import ChipCard from './ChipCard';
import { colors } from '../../styles/colors';
import ActionsCard from './ActionsCard';
import { useParams } from 'react-router-dom';
function PropertyCard(props) {
  let { type } = useParams();
  return (
    <Wrapper>
      <ChipCard operationType={props.operationType}></ChipCard>
      <img
        src={props.photo}
        alt={`${props.operationType} ${props.propertyType}`}
      />
      <WrapperData>
        <div className="price-type">
          <WrapperPrice>
            <RiMoneyDollarCircleLine size="2.667rem" />
            <p>{props.price}</p>
          </WrapperPrice>
          <WrapperType>
            <RiBuildingLine size="2.2rem" />
            <p>{props.propertyType}</p>
          </WrapperType>
        </div>
        <p>{props.address}</p>
      </WrapperData>
      <WrapperOthers>
        <div>
          <BiBed size="2rem" />
          <p>{props.bedrooms}</p>
        </div>
        <div>
          <BiBath size="2rem" />
          <p>{props.bathrooms}</p>
        </div>
        <div>
          <BiArea size="2rem" />
          <p>{`${props.area} m2`}</p>
        </div>
        {props.pet ? <MdPets size="1.8rem" /> : ''}
        {props.favorite ? <AiFillHeart size="2rem" color={colors.pink} /> : ''}
      </WrapperOthers>
      {props.active === undefined ? (
        <div className="bottom-color"></div>
      ) : (
        <ActionsCard active={props.active} />
      )}
    </Wrapper>
  );
}

export default PropertyCard;
