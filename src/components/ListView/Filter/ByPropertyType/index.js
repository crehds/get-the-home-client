import Button from '../../../Button';
import Check from '../../../Inputs/Check';
import { Label, Type, Wrapper } from './styles';

function ByPropertyType({ onChange, values, setIsOpen }) {
  function handleChange({ target }) {
    onChange((values) => ({
      ...values,
      property_type: {
        ...values.property_type,
        [target.value]: target.checked,
      },
    }));
  }
  return (
    <Wrapper>
      <Type>
        <Label>property type</Label>
        <div>
          <Check value={'house'} onChange={handleChange} checked={values.property_type["house"] === true}/>
          <Check value={'apartment'} onChange={handleChange} checked={values.property_type["apartment"] === true}/>
        </div>
      </Type>
      <Button size='small' type='primary' value='done' onClick={() => setIsOpen(false)}/>
    </Wrapper>
  );
}

export default ByPropertyType;
