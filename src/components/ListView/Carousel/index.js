import NukaCarousel from 'nuka-carousel';
import PropertyCard from '../../PropertyCard';
import { CarouselButton, CarouselButtonsWrapper, Wrapper } from './styles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { updateProperty, removeProperty } from '../../../services/landlord-services';

function Carousel({ slides }) {
  const [slide, setSlide] = useState(0);

  function handleAction (id, data, action) {
    if (action === "active") {
      updateProperty(id, data).then(console.log).catch(console.log)
    } else {
      removeProperty(id).then(console.log).catch(console.log)
    }
    window.location.reload();
  }

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
                key={card.id}
                {...card}
                operationType={card.operation_type}
                price={card.price.toLocaleString('en-US')}
                propertyType={card.property_type}
                pet={card.pets}
                handleChange={handleAction}
              />
          ))}
        </Wrapper>
      ))}
    </NukaCarousel>
  );
}

export default Carousel;
