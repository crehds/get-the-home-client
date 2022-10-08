import Section from '../../containers/Section';
import Button from '../Button';
import Choice from '../Choice';
import Check from '../Inputs/Check';
import Number from '../Inputs/Number';
import TextArea from '../Inputs/TextArea';
import Search from '../Search';
import Select from '../Select';
import UploadImage from '../UploadImage';
import {
  CrPrForm,
  CrPrPets,
  CrPrPhotos,
  CrPrPhPreviewEmpty,
  CrPrProperty,
  CrPrSpaces
} from './styles';

const CHOICE_OPTIONS = [
  { value: 'rent', label: 'Rent' },
  { value: 'sale', label: 'Sale' }
];

const SPACE_OPTIONS = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
];

const PETS_CAPTION =
  'Allowing pets increases the likehood of renters  liking the property by 9001.\nIt also makes you a better person.';

const ABOUT_CAPTION =
  'Renters will read this first, so highlight any features or important information the apartment has.';

function CreateProperty() {
  return (
    <Section>
      <CrPrForm>
        <h1>Create a Property listing</h1>
        <Choice options={CHOICE_OPTIONS} label='operation type' />
        <Search placeholder='start typing yo autocomplete' label={'Address'} />
        <Number label={'price'} placeholder={'2000'} />
        <CrPrProperty>
          <p>property type</p>
          <div>
            <Check id={'apartment'} value='Apartment' name='aparment' />
            <Check id={'apartment'} value='House' name='house' />
          </div>
        </CrPrProperty>
        <CrPrSpaces>
          <div>
            <Select labelValue={'Bedrooms'} options={SPACE_OPTIONS} />
          </div>
          <div>
            <Select labelValue={'Bathrooms'} options={SPACE_OPTIONS} />
          </div>
          <div>
            <Number label={'area in m2'} icon={false} />
          </div>
        </CrPrSpaces>
        <CrPrPets>
          <Check value='Pets Allowed' />
          <p>{PETS_CAPTION}</p>
        </CrPrPets>

        <TextArea
          label='about this property'
          placeholder={'My appartment is great because...'}
          caption={ABOUT_CAPTION}
        />

        <CrPrPhotos>
          <h3>Photos</h3>
          <div>
            <UploadImage
              captionText={'Only images, max 5MB'}
              labelValue={'upload as many photos as you wish'}
            />
          </div>
          <div>
            <CrPrPhPreviewEmpty>
              <p>No photos yet</p>
            </CrPrPhPreviewEmpty>
          </div>
        </CrPrPhotos>
        <div>
          <Button
            size='large'
            type='primary'
            value={'publish property listing'}
          />
        </div>
      </CrPrForm>
    </Section>
  );
}

export default CreateProperty;
