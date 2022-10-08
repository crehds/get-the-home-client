import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../../Button';
import Number from '../../../Inputs/Number';
import { Wrapper } from './styles';

function ByPrice() {
  return (
    <Wrapper>
      <div>
        <p>salary range</p>
        <div>
          <Number placeholder='min' />
          <AiOutlineMinus size={24} />
          <Number placeholder='max' />
        </div>
      </div>
      <Button size='small' value='done' type='primary' />
    </Wrapper>
  );
}

export default ByPrice;
