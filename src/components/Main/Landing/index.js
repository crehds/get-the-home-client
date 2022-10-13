import { useEffect, useState } from 'react';
import landingIlustration from '../../../assets/images/landingIlustration.svg';
import { getProperties } from '../../../services/unlogged-service';
import Button from '../../Button';
import DeveloperCard from '../../DeveloperCard';
import PropertyCard from '../../PropertyCard';
import dataTeam from './dataTeam';
import {
  WrapperMain,
  WrapperProducts,
  WrapperSearch,
  WrapperSignup,
  WrapperTeam,
} from './styles';

function Landing() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(
          data.map((e) => ({
            ...e,
            photo:
              'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
          }))
        );
      })
      .catch(console.log);
  }, []);
  return (
    <WrapperMain>
      <WrapperSearch>
        <img src={landingIlustration} alt='landing ilustration' />
        <img src={landingIlustration} alt='landing ilustration' />
        <div>
          <h1>Meet your new Home</h1>
          <p>The easiest way to find where you belong</p>
        </div>
      </WrapperSearch>
      <WrapperProducts>
        <p>Find an Apartment you Love</p>
        <h4>Homes for rent at the best prices</h4>
        <div>
          {properties.slice(0, 3).map((property) => {
            return (
              <PropertyCard
                key={property.id}
                operationType={property.operation_type}
                photo={property.photo}
                price={property.price.toLocaleString('en-US')}
                propertyType={property.property_type}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                pet={property.pets}
                active={property.active}
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
            size='large'
            type='primary'
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
