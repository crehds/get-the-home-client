// import { set } from 'date-fns';
import { useEffect, useState } from 'react';
import Section from '../../containers/Section';
import { getProperties } from '../../services/unlogged-service';
// import { cards } from './cards';
import Carousel from './Carousel';
import Filter from './Filter';
import { ListViewWrapper, PropertiesFound } from './styles';

// const slides = [[...cards], [...cards], [...cards]];
const initialState = {
  price: { min: '', max: '' },
  property_type: { apartment: false, house: false },
  bedrooms: '',
  bathrooms: '',
  pets: false,
  area: { min: '', max: '' },
  operation_type: 'sale & rent',
  searchQuery: '',
};
function ListView() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState(initialState);

  useEffect(() => {
    getProperties().then((data) => {
      //Paso adicional hasta que este resuelto la imagen de la api
      setProperties(
        data.map((e) => ({
          ...e,
          photo:
            'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
        }))
      );
    });
  }, []);

  console.log(filters)

  function filterByRange(properties, range, attribute) {
    if (range.min === 0 && range.max === Infinity) return properties;
    if (range.min === '' && range.max === '') return properties;
    if (attribute === 'price') {
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
    if (pets === false) return properties;

    if (pets === true) {
      return properties.filter((property) => property.pets === true);
    }
  }

  function filterByNumber(properties, number, attribute) {
    if (number === '') return properties;
    if (attribute === 'bedrooms') {
      return properties.filter(
        (property) => property.bedrooms === parseInt(number)
      );
    } else {
      return properties.filter(
        (property) => property.bathrooms === parseInt(number)
      );
    }
  }

  function filterByAddress(properties, searchQuery) {
    if (searchQuery === '') return properties;

    return properties.filter((property) =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  function filterByOperationType(properties, operation_type) {
    if (operation_type === "sale & rent") return properties;

    return properties.filter((property) => property.operation_type === operation_type);
  }

  const propertiesByPrice = filterByRange(properties, filters.price, 'price');
  const propertiesByPropertyType = filterByPropertyType(
    propertiesByPrice,
    filters.property_type
  );
  const propertiesByPets = filterByPets(propertiesByPropertyType, filters.pets);
  const propertiesByArea = filterByRange(
    propertiesByPets,
    filters.area,
    'area'
  );
  const propertiesByBedrooms = filterByNumber(
    propertiesByArea,
    filters.bedrooms,
    'bedrooms'
  );
  const propertiesByBathrooms = filterByNumber(
    propertiesByBedrooms,
    filters.bathrooms,
    'bathrooms'
  );
  const propertiesByAddress = filterByAddress(
    propertiesByBathrooms,
    filters.searchQuery
  );

  const propertiesFiltered = filterByOperationType(
    propertiesByAddress,
    filters.operation_type
  )
  
  let propertiesArray = [];
  function splitProperties() {
    let propertySplit = [];
    let i = 0;
    while (i < propertiesFiltered.length) {
      propertySplit = [];
      for (let j = 0; j < 9; j++) {
        if (j < propertiesFiltered.length && i < propertiesFiltered.length) {
          propertySplit.push(propertiesFiltered[i]);
          i++;
        }
      }
      propertiesArray.push(propertySplit);
    }
  }
  splitProperties();

  return (
    <Section>
      <ListViewWrapper>
        <Filter handler={setFilters} values={filters} />
        <PropertiesFound>
          {propertiesFiltered.length} Properties found
        </PropertiesFound>
        <Carousel slides={propertiesArray} />
      </ListViewWrapper>
    </Section>
  );
}

export default ListView;
