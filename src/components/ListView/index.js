import { set } from 'date-fns';
import { useEffect, useState } from 'react';
import Section from '../../containers/Section';
import { getProperties } from '../../services/unlogged-service';
import { cards } from './cards';
import Carousel from './Carousel';
import Filter from './Filter';
import { ListViewWrapper, PropertiesFound } from './styles';

// const slides = [[...cards], [...cards], [...cards]];
const initialState = { price: { min: '', max: '' } };
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
  useEffect(() => {
    const newProperties = properties.filter(
      (property) =>
        property.price >= filters.price['min'] &&
        property.price <= filters.price['max']
    );
    console.log(newProperties);
    newProperties.length > 0 && setRenderProperties(newProperties);
    newProperties.length === 0 && setRenderProperties([]);
    newProperti;
  }, [filters]);

  return (
    <Section>
      <ListViewWrapper>
        <Filter handler={setFilters} values={filters} />
        <PropertiesFound>
          {renderProperties.length} Properties found
        </PropertiesFound>
        <Carousel slides={renderProperties} />
      </ListViewWrapper>
    </Section>
  );
}

export default ListView;
