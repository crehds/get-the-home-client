import landingIlustration from '../../../assets/images/landingIlustration.svg';
import Button from '../../Button';
import DeveloperCard from '../../DeveloperCard';
import PropertyCard from '../../PropertyCard';
import dataTeam from './dataTeam';
import {
  WrapperMain,
  WrapperProducts,
  WrapperSearch,
  WrapperSignup,
  WrapperTeam
} from './styles';

const cards = [
  {
    id: 1,
    operationType: 'sale',
    photo:
      'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
    price: 30000,
    propertyType: 'Apartment',
    address: '86872 Jacob Gateway, Durganport, WV 48044',
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    pet: false,
    favorite: false
  },
  {
    id: 2,
    operationType: 'sale',
    photo:
      'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
    price: 3000,
    propertyType: 'Apartment',
    address: '86872 Jacob Gateway, Durganport, WV 48044',
    bedrooms: 4,
    bathrooms: 2,
    area: 1800,
    pet: true,
    favorite: false
  },
  {
    id: 3,
    operationType: 'rent',
    photo:
      'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
    price: 30000,
    propertyType: 'Apartment',
    address: '86872 Jacob Gateway, Durganport, WV 48044',
    bedrooms: 4,
    bathrooms: 2,
    area: 20,
    pet: true,
    favorite: false
  }
];

function Landing() {
  return (
    <WrapperMain>
      <WrapperSearch>
        <img src={landingIlustration} alt="landing ilustration" />
        <img src={landingIlustration} alt="landing ilustration" />
        <div>
          <h1>Meet your new Home</h1>
          <p>The easiest way to find where you belong</p>
        </div>
      </WrapperSearch>
      <WrapperProducts>
        <p>Find an Apartment you Love</p>
        <h4>Homes for rent at the best prices</h4>
        <div>
          {cards.map((card) => {
            return (
              <PropertyCard
                key={card.id}
                operationType={card.operationType}
                photo={card.photo}
                price={card.price.toLocaleString('en-US')}
                propertyType={card.propertyType}
                address={card.address}
                bedrooms={card.bedrooms}
                bathrooms={card.bathrooms}
                area={card.area}
                pet={card.pet}
                favorite={card.favorite}
                active={card.active}
              ></PropertyCard>
            );
          })}
        </div>
      </WrapperProducts>
      <WrapperSignup>
        <div>
          <h4>
            Getting someone to rent your apartment has never been this easy
          </h4>
          <Button
            size="large"
            type="primary"
            value={'Create an account now'}
          ></Button>
        </div>
      </WrapperSignup>
      <WrapperTeam>
        <h3>Meet the team</h3>
        <div>
          {dataTeam.map((developer) => {
            return (
              <DeveloperCard
                key={developer.name}
                avatar={developer.photo}
                name={developer.name}
                githubLink={developer.githubLink}
                linkedinLink={developer.linkedinLink}
              />
            );
          })}
        </div>
      </WrapperTeam>
    </WrapperMain>
  );
}

export default Landing;
