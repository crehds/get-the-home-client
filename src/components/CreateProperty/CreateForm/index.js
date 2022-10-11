import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

import Button from '../../Button';
import Choice from '../../Choice';
import Check from '../../Inputs/Check';
import Number from '../../Inputs/Number';
import Radio from '../../Inputs/Radio';
import TextArea from '../../Inputs/TextArea';
import Search from '../../Search';
import Select from '../../Select';
import UploadImage from '../../UploadImage';
import {
  CrPrForm,
  CrPrPets,
  CrPrPhotos,
  CrPrPhPreviewEmpty,
  CrPrProperty,
  CrPrSpaces,
  EmptyWrapper
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

function CreateForm() {
  const { handleSubmit, handleChange, setFieldValue } = useFormikContext();
  const [preview, setPreview] = useState([]);

  return (
    <CrPrForm onSubmit={handleSubmit}>
      <h1>Create a Property listing</h1>
      <Choice
        id='create-form'
        options={CHOICE_OPTIONS}
        label='operation type'
        name='operation_type'
        handleChange={handleChange}
      />
      <Search
        placeholder='start typing yo autocomplete'
        label={'Address'}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        name={'address'}
      />
      <Number
        label={'price'}
        placeholder={'2000'}
        handleChange={handleChange}
        name={'price'}
      />
      <CrPrProperty>
        <p>property type</p>
        <div>
          <Radio
            id={'apartment'}
            value='apartment'
            name='property_type'
            onChange={handleChange}
          />
          <Radio
            id={'apartment'}
            value='house'
            name='property_type'
            onChange={handleChange}
          />
        </div>
      </CrPrProperty>
      <CrPrSpaces>
        <div>
          <Select
            labelValue={'Bedrooms'}
            options={SPACE_OPTIONS}
            handleChange={setFieldValue}
            name='bedrooms'
          />
        </div>
        <div>
          <Select
            labelValue={'Bathrooms'}
            options={SPACE_OPTIONS}
            handleChange={setFieldValue}
            name='bathrooms'
          />
        </div>
        <div>
          <Number
            label={'area in m2'}
            icon={false}
            handleChange={handleChange}
            name='area'
            placeholder={'##'}
          />
        </div>
      </CrPrSpaces>
      <CrPrPets>
        <Check value='Pets Allowed' onChange={handleChange} name='pets' />
        <p>{PETS_CAPTION}</p>
      </CrPrPets>

      <TextArea
        label='about this property'
        placeholder={'My apartment is great because...'}
        caption={ABOUT_CAPTION}
        handleChange={handleChange}
        name='about'
      />

      <CrPrPhotos>
        <h3>Photos</h3>
        <UploadImage
          captionText={'Only images, max 5MB'}
          labelValue={'upload as many photos as you wish'}
          name='photos'
          setPreview={setPreview}
          handleChange={setFieldValue}
        />
        <EmptyWrapper>
          <CrPrPhPreviewEmpty>
            <p>No photos yet</p>
          </CrPrPhPreviewEmpty>
          {preview.map((photo, i) => (
            <img key={`preview-${i}`} src={photo.currentSrc} alt='test' />
          ))}
        </EmptyWrapper>
      </CrPrPhotos>
      <div>
        <Button
          size='large'
          buttonType='submit'
          type='primary'
          value={'publish property listing'}
        />
      </div>
    </CrPrForm>
  );
}

export default CreateForm;
