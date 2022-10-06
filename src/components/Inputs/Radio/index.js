import { Label } from './styles';

function Radio({ id, name, value }) {
  return (
    <Label htmlFor={id}>
      <input type='radio' id={id} name={name} value={value} />
      {value}
    </Label>
  );
}

export default Radio;
