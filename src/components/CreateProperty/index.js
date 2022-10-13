import { useState } from 'react';
import Section from '../../containers/Section';
import PrepareForm from '../PrepareForm';
import CreateForm from './CreateForm';

function forSubmit(e) {
  console.log(e);
}

function CreateProperty() {
  const [operationType, setOperationType] = useState('rent');
  const initialValues = {
    operation_type: operationType,
    pets: true,
    maintenance: 0,
    bathrooms: null,
    bedrooms: null,
    property_type: '',
    area: '',
    price: '',
    about: '',
    address: '',
    active: true,
    photos: []
  };

  return (
    <Section>
      <PrepareForm onSubmit={forSubmit} initialValues={initialValues}>
        <CreateForm />
      </PrepareForm>
    </Section>
  );
}

export default CreateProperty;
