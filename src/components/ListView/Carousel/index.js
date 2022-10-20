import NukaCarousel from 'nuka-carousel';
import PropertyCard from '../../PropertyCard';
import { CarouselButton, CarouselButtonsWrapper, Wrapper } from './styles';
import { useState } from 'react';

function Carousel({ slides }) {
  const [slide, setSlide] = useState(0);
  return (
    <NukaCarousel
      renderBottomCenterControls={({ pagingDotsIndices, goToSlide }) => (
        <CarouselButtonsWrapper>
          {pagingDotsIndices.map((index) => (
            <CarouselButton
              key={index}
              onClick={() => {
                setSlide(index);
                goToSlide(index);
              }}
              value={index}
              currentSlide={slide}
            >
              {index + 1}
            </CarouselButton>
          ))}
        </CarouselButtonsWrapper>
      )}
      renderCenterRightControls={() => null}
      renderCenterLeftControls={() => null}
      animation='zoom'
      className='carousel'
    >
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
