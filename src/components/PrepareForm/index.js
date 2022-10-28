import { Formik } from 'formik';

function PrepareForm({ children, initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {children}
    </Formik>
  );
}

export default PrepareForm;
