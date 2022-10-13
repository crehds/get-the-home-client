import NukaCarousel from 'nuka-carousel';
import PropertyCard from '../../PropertyCard';
import { Wrapper } from './styles';

function Carousel({ slides }) {
  const newSlides = [[...slides]];
  return (
    <NukaCarousel>
      {newSlides.map((cards, i) => (
        <Wrapper key={`list-view-slide-${i}`}>
          {cards.map((card, j) => (
            <PropertyCard
              key={`list-view-card-${i}-${j}`}
              operationType={card.operation_type}
              photo={card.photo}
              price={card.price.toLocaleString('en-US')}
              propertyType={card.property_type}
              address={card.address}
              bedrooms={card.bedrooms}
              bathrooms={card.bathrooms}
              area={card.area}
              pet={card.pets}
              active={card.active}
            />
          ))}
        </Wrapper>
      ))}
    </NukaCarousel>
  );
}

export default Carousel;
