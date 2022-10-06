import { Label } from './styles';

function Check({ id, name, value }) {
  return (
    <Label htmlFor={id}>
      <input type='checkbox' id={id} name={name} value={value} />
      {value}
    </Label>
  );
}

export default Check;
