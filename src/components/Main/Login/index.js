import { Formik } from 'formik';
import Button from '../../Button';
import Input from '../../Inputs/Input';
import {
  StyledError,
  StyledFormContainer,
  StyledInputsContainer,
  WrapperLoginForm,
} from './styles';
import { FiUserPlus } from 'react-icons/fi';
import { useAuth } from '../../../context/auth-context';
import { Navigate } from 'react-router-dom';


function Login() {
  const { login, user } = useAuth();


  if (user) {
    console.log(user)
    return <Navigate to='/'/>;
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = 'Email required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = 'Invalid email address';
        if (!values.password) errors.password = 'Password required';
        return errors;
      }}
      onSubmit={(user) => {
        console.log(user);
        login(user)
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
        <WrapperLoginForm onSubmit={handleSubmit}>
          <StyledFormContainer>
            <h5>Login</h5>
            <StyledInputsContainer>
              {errors.email && touched.email && (
                <StyledError>{errors.email}</StyledError>
              )}
              <Input
                name='email'
                placeholder='user@email.com'
                label='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <StyledError>{errors.password}</StyledError>
              )}
              <Input
                name='password'
                placeholder='******'
                label='Password'
                value={values.password}
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </StyledInputsContainer>
            <Button
              type='primary'
              size='default'
              value='Login'
              icon={<FiUserPlus size='2rem' />}
            />
          </StyledFormContainer>
        </WrapperLoginForm>
      )}
    </Formik>
  );
}

export default Login;
