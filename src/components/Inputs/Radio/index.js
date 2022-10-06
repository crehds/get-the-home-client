import { Label } from './styles';

function Radio({ id, name, value, text }) {
  return (
    <Label htmlFor={id}>
      <input type='radio' id={id} name={value} value={value} />
      {value}
    </Label>
  );
}

export default Radio;
