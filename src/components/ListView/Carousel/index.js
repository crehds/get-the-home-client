import NukaCarousel from 'nuka-carousel';
import PropertyCard from '../../PropertyCard';
import { Wrapper } from './styles';

function Carousel({ slides }) {
  return (
    <NukaCarousel>
      {slides.map((cards, i) => (
        <Wrapper key={`list-view-slide-${i}`}>
          {cards.map((card, j) => (
            <PropertyCard
              key={`list-view-card-${i}-${j}`}
              {...card}
              operationType={card.operation_type}
              price={card.price.toLocaleString('en-US')}
              propertyType={card.property_type}
              pet={card.pets}
            />
          ))}
        </Wrapper>
      ))}
    </NukaCarousel>
  );
}

export default Carousel;
