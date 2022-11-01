import Carousel from 'nuka-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { MdPets } from 'react-icons/md'
import {
  AboutDetails,
  BuildingDetails,
  Details,
  GeneralDetails,
  ImgsCarousel,
  InfoWrapper,
  MapDetails
} from './styles';
import { colors } from '../../../styles/colors';
import property1 from '../../../assets/properties/photo1.png';
import property2 from '../../../assets/properties/photo1.png';
import property3 from '../../../assets/properties/photo1.png';
import property4 from '../../../assets/properties/photo1.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { showProperty } from '../../../services/unlogged-service';


const images = [property1, property2, property3, property4];
function Info() {
  const [property, setProperty] = useState('');
  let { id } = useParams();


  useEffect(() => {
    showProperty(id).then(setProperty).catch(console.log);
  }, [id]);
  const commaSeparator = property.address && property.address.indexOf(',')

  return (
    <InfoWrapper>
      <ImgsCarousel>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <IoIosArrowBack
              color='gray'
              size={24}
              onClick={previousSlide}
              style={{ cursor: 'pointer' }}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IoIosArrowForward
              color='gray'
              size={24}
              onClick={nextSlide}
              style={{ cursor: 'pointer' }}
            />
          )}
          animation='zoom'
          renderBottomCenterControls={() => null}
          className='carousel'
          autoplay
        >
          {images.map((src, i) => (
            <figure key={`image-${i}`}>
              <img src={src} alt='property' />
            </figure>
          ))}
        </Carousel>
      </ImgsCarousel>
      <Details>
        <GeneralDetails>
          <div>
            <h4>{property.address && property.address.split(',')[0]}</h4>
            <p>{commaSeparator !==-1 && property.address && property.address.slice(commaSeparator + 1)}</p> 
          </div>
          <div>
            <h4>
              <RiMoneyDollarCircleLine />
              {property.price}
            </h4>
            <p>+{property.maintenance}</p>
          </div>
        </GeneralDetails>
        <BuildingDetails>
          <div>
            <BiBed size={32} color={colors.gray} />
            <p>{property.bedrooms && property.bedrooms + " bedrooms"}</p>
          </div>
          <div>
            <BiBath size={32} color={colors.gray} />
            <p>{property.bathrooms && property.bathrooms + " bathrooms"} </p>
          </div>
          <div>
            <BiArea size={32} color={colors.gray} />
            <p>{property.area && property.area + " m2"} </p>
          </div>
          <div>
            <MdPets size={32} color={colors.gray} />
            <p>{property.pets? "Pets allowed": "Pets not allowed"}</p>
          </div>
        </BuildingDetails>
        <AboutDetails>
          <h6>About this property</h6>
          <p>{property.about && property.about}</p>
        </AboutDetails>
        <MapDetails>
          <h6>Location</h6>
          <p>{property.address}</p>
          <div>
            <iframe
              title='google-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.8829997656744!2d-77.03898822064161!3d-12.059614858222544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c1658a33b1%3A0x44b362557e937378!2sAv.%209%20de%20Diciembre%20236%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1665153862081!5m2!1ses!2spe'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </MapDetails>
      </Details>
    </InfoWrapper>
  );
}

export default Info;
