import { Formik } from 'formik';
import { useAuth } from '../../../../context/auth-context';
import Button from '../../../Button';
import Input from '../../../Inputs/Input';
import {
  StyledError,
  StyledFormContainer,
  StyledInputsContainer,
  WrapperSignupForm,
} from './styles';

function SignupForm({ data, formType = 'signup' }) {
  const { signup } = useAuth();

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
        else if (
          !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(
            values.phone
          )
        )
          errors.phone = 'Invalid phone number';
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
        formType === 'signup'
          ? signup(credentials)
          : console.log('Update profile');
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
              {errors.name && touched.name && (
                <StyledError>{errors.name}</StyledError>
              )}
              <Input
                label='Name'
                placeholder='John Doe'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <StyledError>{errors.email}</StyledError>
              )}
              <Input
                label='Email'
                placeholder='user@mail.com'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && (
                <StyledError>{errors.phone}</StyledError>
              )}
              <Input
                label='Phone'
                placeholder='999-999-999'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <StyledError>{errors.password}</StyledError>
              )}
              <Input
                label='Password'
                placeholder='******'
                name='password'
                caption={'At least 6 characteres'}
                value={values.password}
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <StyledError>{errors.passwordConfirmation}</StyledError>
              )}
              <Input
                label='Password Confirmation'
                placeholder='******'
                name='passwordConfirmation'
                onChange={handleChange}
                type='password'
                onBlur={handleBlur}
              />
            </StyledInputsContainer>
            <Button
              type='primary'
              size='default'
              value={
                formType === 'signup' ? 'Create account' : 'Update profile'
              }
              onSubmit={handleSubmit}
            />
          </StyledFormContainer>
        </WrapperSignupForm>
      )}
    </Formik>
  );
}

export default SignupForm;
