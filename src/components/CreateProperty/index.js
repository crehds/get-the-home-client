import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Section from '../../containers/Section';
import { createProperty } from '../../services/landlord-services';
import PrepareForm from '../PrepareForm';
import CreateForm from './CreateForm';

function forSubmit(e) {
  console.log(e);
  createProperty(e);
  return <Navigate to='/'/>;
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
