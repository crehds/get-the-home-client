import Section from '../../containers/Section';
import { PropertyDetailWrapper } from './styles';
import Actions from './Actions';
import Info from './Info';

function PropertyDetail() {
  return (
    <Section>
      <PropertyDetailWrapper>
        <Info>Content</Info>
        <Actions>Modal</Actions>
      </PropertyDetailWrapper>
    </Section>
  );
}

export default PropertyDetail;
