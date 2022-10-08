import { Caption, InputWrapper, Label, StyledInput } from './styles';

function Input({ label, caption, placeholder }) {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput placeholder={placeholder} />
      {caption && <Caption>{caption}</Caption>}
    </InputWrapper>
  );
}

export default Input;
