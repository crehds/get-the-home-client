import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../../Button';
import Number from '../../../Inputs/Number';
import { Wrapper } from './styles';

function ByPrice({ onChange, values }) {
  return (
    <Wrapper>
      <div>
        <p>salary range</p>
        <div>
          <Number
            placeholder='min'
            value={values.price['min']}
            functionChange={onChange}
            name='min'
          />
          <AiOutlineMinus size={24} />
          <Number
            placeholder='max'
            value={values.price['max']}
            functionChange={onChange}
            name='max'
          />
        </div>
      </div>
      <Button size='small' value='done' type='primary' />
    </Wrapper>
  );
}

export default ByPrice;
