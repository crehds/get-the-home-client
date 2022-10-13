import { Field } from 'formik';
import { Label } from './styles';

function Radio({ id, name, value, handleChange }) {
  return (
    <Label htmlFor={id}>
      <Field type='radio' id={id} name={name} value={value} />
      {value}
    </Label>
  );
}

export default Radio;
