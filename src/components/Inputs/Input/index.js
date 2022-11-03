import { Caption, InputWrapper, Label, StyledInput } from './styles';

function Input({
  label,
  caption,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  type = 'text',
}) {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
      />
      {caption && <Caption>{caption}</Caption>}
    </InputWrapper>
  );
}

export default Input;
