import { Caption, Label, StyledTextArea, TextAreaWrapper } from './styles';

function TextArea({ label, caption, placeholder, name, handleChange }) {
  return (
    <TextAreaWrapper>
      {label && <Label>{label}</Label>}
      <StyledTextArea
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {caption && <Caption>{caption}</Caption>}
    </TextAreaWrapper>
  );
}

export default TextArea;
