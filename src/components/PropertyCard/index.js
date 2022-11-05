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
import { useLocation, Link } from 'react-router-dom';

const defaultPhoto = 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b'

function PropertyCard(props) {
  const location = useLocation();
  return (
    <Wrapper>
      <ChipCard operationType={props.operationType}></ChipCard>
      <img
        src={props.photo? props.photo : defaultPhoto}
        alt={`${props.operationType} ${props.propertyType}`}
      />
      <Link to={`/property-detail/${props.id}`}><WrapperData>
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
      </WrapperData></Link>
      <Link to={`/property-detail/${props.id}`}><WrapperOthers>
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
      </WrapperOthers></Link>
      {!(location.pathname.includes("/myproperties"))  ? (
        <div className="bottom-color"></div>
      ) : (
        <ActionsCard active={props.active} id={props.id} handleChange={props.handleChange}/>
      )}
    </Wrapper>
  );
}

export default PropertyCard;
