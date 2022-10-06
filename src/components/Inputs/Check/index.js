import { Label } from './styles';

function Check({ id, name, value, checked, onChange }) {
  return (
    <Label htmlFor={id}>
      <input
        type='checkbox'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {value}
    </Label>
  );
}

export default Check;
