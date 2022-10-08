import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../../Button';
import Check from '../../../Inputs/Check';
import Number from '../../../Inputs/Number';
import { Wrapper } from './styles';

function More() {
  return (
    <Wrapper>
      <Check value='Pets Allowed' />
      <div>
        <p>salary range</p>
        <div>
          <Number placeholder='min' icon={false} />
          <AiOutlineMinus size={24} />
          <Number placeholder='max' icon={false} />
        </div>
      </div>
      <Button size='small' type='primary' value='done' />
    </Wrapper>
  );
}

export default More;
