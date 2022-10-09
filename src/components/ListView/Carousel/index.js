import NukaCarousel from 'nuka-carousel';
import PropertyCard from '../../PropertyCard';
import { Wrapper } from './styles';

function Carousel({ slides }) {
  const newSlides = [[...slides]];
  return (
    <NukaCarousel>
      {newSlides.map((cards, i) => (
        <Wrapper>
          {cards.map((card) => (
            <PropertyCard {...card} />
          ))}
        </Wrapper>
      ))}
    </NukaCarousel>
  );
}

export default Carousel;
