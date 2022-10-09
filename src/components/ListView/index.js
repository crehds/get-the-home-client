import { set } from 'date-fns';
import { useEffect, useState } from 'react';
import Section from '../../containers/Section';
import { getProperties } from '../../services/unlogged-service';
import { cards } from './cards';
import Carousel from './Carousel';
import Filter from './Filter';
import { ListViewWrapper, PropertiesFound } from './styles';

// const slides = [[...cards], [...cards], [...cards]];
const initialState = {
  price: { min: 0, max: Infinity },
  property_type: { apartment: false, house: false },
};
function ListView() {
  // let slides = [];

  const [properties, setProperties] = useState([]);
  const [renderProperties, setRenderProperties] = useState([]);
  const [filters, setFilters] = useState(initialState);
  useEffect(() => {
    getProperties()
      .then((data) => {
        //Paso adicional hasta que este resuelto la imagen de la api
        setProperties(
          data.map((e) => ({
            ...e,
            photo:
              'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
          }))
        );
      })
      .then(() => setRenderProperties(properties))
      .catch(console.log);
  }, []);
  // useEffect(() => {
  //   const newProperties = properties.filter(
  //     (property) =>
  //       property.price >= filters.price['min'] &&
  //       property.price <= filters.price['max']
  //   );
  //   console.log(newProperties);
  //   // newProperties.length > 0 && setRenderProperties(newProperties);
  //   (filters.price.min === 0 && filters.price.max === Infinity || filters.price.min === "" && filters.price.max === "")? setRenderProperties(properties) : setRenderProperties(newProperties);
  //   // newProperties.length === 0 && setRenderProperties([]);
  //   // newProperti;
  // }, [filters]);

  console.log(filters);

  function filterByPrice(properties, price) {
    if (price.min === 0 && price.max === Infinity) return properties;
    if (price.min === '' && price.max === '') return properties;
    if (price.min === '')
      return properties.filter((property) => property.price <= price.max);
    if (price.max === '')
      return properties.filter((property) => property.price >= price.min);

    return properties.filter(
      (property) => property.price >= price.min && property.price <= price.max
    );
  }

  function filterByPropertyType(properties, property_type) {
    if (property_type.apartment === false && property_type.house === false)
      return properties;

    if (property_type.apartment === true && property_type.house === true)
      return properties;
    if (property_type.apartment === true) {
      return properties.filter(
        (property) => property.property_type === 'apartment'
      );
    } else if (property_type.house === true) {
      return properties.filter(
        (property) => property.property_type === 'house'
      );
    }
  }

  const propertiesByPrice = filterByPrice(properties, filters.price);
  const propertiesByPropertyType = filterByPropertyType(
    propertiesByPrice,
    filters.property_type
  );

  return (
    <Section>
      <ListViewWrapper>
        <Filter handler={setFilters} values={filters} />
        <PropertiesFound>
          {propertiesByPropertyType.length} Properties found
        </PropertiesFound>
        <Carousel slides={propertiesByPropertyType} />
      </ListViewWrapper>
    </Section>
  );
}

export default ListView;
