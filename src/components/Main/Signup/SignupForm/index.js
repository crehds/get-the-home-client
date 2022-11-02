import { Formik } from 'formik';
import Button from '../../../Button';
import Input from '../../../Inputs/Input';
import {
  StyledFormContainer,
  StyledInputsContainer,
  WrapperSignupForm,
} from './styles';

function SignupForm({ data }) {
  return (
    <Formik
      initialValues={data}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name required';
        if (!values.email) errors.email = 'Email required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = 'Invalid email address';
        if (!values.phone) errors.phone = 'Phone required';
        if (!values.password) errors.password = 'Password required';
        if (values.password.length < 6)
          errors.password = 'Password should be at least 6 characters';
        if (values.password !== values.passwordConfirmation)
          errors.passwordConfirmation = 'Passwords should match';
        return errors;
      }}
      onSubmit={(user) => {
        const { name, email, password, phone, role } = user;
        const credentials = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          role: role,
        };
        console.log(credentials);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <WrapperSignupForm onSubmit={handleSubmit}>
          <StyledFormContainer>
            <h5>Create your Account</h5>
            <StyledInputsContainer>
              {errors.name && touched.name && errors.name}
              <Input
                label='Name'
                placeholder='John Doe'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && errors.email}
              <Input
                label='Email'
                placeholder='user@mail.com'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && errors.phone}
              <Input
                label='Phone'
                placeholder='999-999-999'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && errors.password}
              <Input
                label='Password'
                placeholder='******'
                name='password'
                caption={'At least 6 characteres'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.passwordConfirmation &&
                touched.passwordConfirmation &&
                errors.passwordConfirmation}
              <Input
                label='Password Confirmation'
                placeholder='******'
                name='passwordConfirmation'
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </StyledInputsContainer>
            <Button type='submit' size='default' value='Create account' />
          </StyledFormContainer>
        </WrapperSignupForm>
      )}
    </Formik>
  );
}

export default SignupForm;
