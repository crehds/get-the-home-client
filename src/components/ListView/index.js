import Section from '../../containers/Section';
import { cards } from './cards';
import Carousel from './Carousel';
import Filter from './Filter';
import { ListViewWrapper, PropertiesFound } from './styles';

const slides = [[...cards], [...cards], [...cards]];
function ListView() {
  return (
    <Section>
      <ListViewWrapper>
        <Filter />
        <PropertiesFound>{cards.length * 3} Properties found</PropertiesFound>
        <Carousel slides={slides} />
      </ListViewWrapper>
    </Section>
  );
}

export default ListView;
