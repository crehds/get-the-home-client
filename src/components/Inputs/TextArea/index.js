import { Caption, Label, StyledTextArea, TextAreaWrapper } from './styles';

function TextArea({ label, caption, placeholder }) {
  return (
    <TextAreaWrapper>
      {label && <Label>{label}</Label>}
      <StyledTextArea placeholder={placeholder} />
      {caption && <Caption>{caption}</Caption>}
    </TextAreaWrapper>
  );
}

export default TextArea;
