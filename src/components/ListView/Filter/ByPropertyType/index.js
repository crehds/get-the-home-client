import Button from '../../../Button';
import Check from '../../../Inputs/Check';
import { Label, Type, Wrapper } from './styles';

function ByPropertyType({ onChange }) {
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
          <Check value={'house'} onChange={handleChange} />
          <Check value={'apartment'} onChange={handleChange} />
        </div>
      </Type>
      <Button size='small' type='primary' value='done' />
    </Wrapper>
  );
}

export default ByPropertyType;
