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
  pets: false, 
  area: { min: 0, max: Infinity }
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

  function filterByRange(properties, range, attribute) {
    if (range.min === 0 && range.max === Infinity) return properties;
    if (range.min === '' && range.max === '') return properties;
    if (attribute === "price") {
      if (range.min === '')
        return properties.filter((property) => property.price <= range.max);
      if (range.max === '')
        return properties.filter((property) => property.price >= range.min);

      return properties.filter(
        (property) => property.price >= range.min && property.price <= range.max
      );
    } else {
      if (range.min === '')
      return properties.filter((property) => property.area <= range.max);
      if (range.max === '')
        return properties.filter((property) => property.area >= range.min);

      return properties.filter(
        (property) => property.area >= range.min && property.area <= range.max
    );
    }
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

  function filterByPets(properties, pets) {
    if (pets === false ) return properties;
    console.log(properties)

     if (pets === true) {
      return properties.filter(
        (property) => property.pets === true
      );
    }
  }

  const propertiesByPrice = filterByRange(properties, filters.price, "price");
  const propertiesByPropertyType = filterByPropertyType(
    propertiesByPrice,
    filters.property_type
  );
  const propertiesByPets = filterByPets(
    propertiesByPropertyType,
    filters.pets
  );
  const propertiesByRange = filterByRange(propertiesByPets, filters.area, "area");


  return (
    <Section>
      <ListViewWrapper>
        <Filter handler={setFilters} values={filters} />
        <PropertiesFound>
          {propertiesByRange.length} Properties found
        </PropertiesFound>
        <Carousel slides={propertiesByRange} />
      </ListViewWrapper>
    </Section>
  );
}

export default ListView;
