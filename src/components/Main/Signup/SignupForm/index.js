import Button from '../../../Button';
import Input from '../../../Inputs/Input';
import {
  StyledFormContainer,
  StyledInputsContainer,
  WrapperSignupForm
} from './styles';

function SignupForm() {
  return (
    <WrapperSignupForm>
      <StyledFormContainer>
        <h5>Create your Account</h5>
        <StyledInputsContainer>
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email" placeholder="user@mail.com" />
          <Input label="Phone" placeholder="999-999-999" />
          <Input
            label="Password"
            placeholder="******"
            caption={'At least 6 characteres'}
          />
          <Input label="Password Confirmation" placeholder="******" />
        </StyledInputsContainer>
        <Button type="primary" size="default" value="Create account" />
      </StyledFormContainer>
    </WrapperSignupForm>
  );
}

export default SignupForm;
