import Button from '../../../Button';
import Check from '../../../Inputs/Check';
import { Label, Type, Wrapper } from './styles';

function ByPropertyType() {
  return (
    <Wrapper>
      <Type>
        <Label>property type</Label>
        <div>
          <Check value={'house'} />
          <Check value={'apartment'} />
        </div>
      </Type>
      <Button size='small' type='primary' value='done' />
    </Wrapper>
  );
}

export default ByPropertyType;
