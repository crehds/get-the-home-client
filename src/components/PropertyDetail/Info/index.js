import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath } from 'react-icons/bi';
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

const ABOUT_MESSAGE =
  '3 Bedroom/2 Bathroom apartment available for ASAP move-in!\n\nApartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave.\n\nThe kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.';

function Info() {
  return (
    <InfoWrapper>
      <ImgsCarousel>Carousel</ImgsCarousel>
      <Details>
        <GeneralDetails>
          <div>
            <h4>Francisco de Paula Ugarriza 27</h4>
            <p>Miraflores, Lima</p>
          </div>
          <div>
            <h4>
              <RiMoneyDollarCircleLine />
              3,000
            </h4>
            <p>+100</p>
          </div>
        </GeneralDetails>
        <BuildingDetails>
          <div>
            <BiBed size={32} color={colors.gray} />
            <p>4 bedrooms</p>
          </div>
          <div>
            <BiBath size={32} color={colors.gray} />
            <p>2 bathrooms</p>
          </div>
          <div>
            <BiBed size={32} color={colors.gray} />
            <p>180 m2</p>
          </div>
          <div>
            <BiBed size={32} color={colors.gray} />
            <p>Pets allowed</p>
          </div>
        </BuildingDetails>
        <AboutDetails>
          <h6>About this property</h6>
          <p>{ABOUT_MESSAGE}</p>
        </AboutDetails>
        <MapDetails>
          <h6>Location</h6>
          <p>Francisco de Paula Ugarriza 27, Miraflores, Lima</p>
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
