import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../../Button';
import Number from '../../../Inputs/Number';
import { Wrapper } from './styles';

function ByPrice({ onChange, values }) {


  function handleChange({ target }) {
    console.log(values.price["min"])
    onChange((values) => ({
      ...values,
      price: {
        ...values.price,
        [target.name]: target.value,
        },
    }));
  }

  return (
    <Wrapper>
      <div>
        <p>salary range</p>
        <div>
          <Number
            placeholder='min'
            value={values.price['min']}
            handleChange={handleChange}
            name='min'
            id={"price"}
          />
          <AiOutlineMinus size={24} />
          <Number
            placeholder='max'
            value={values.price['max']}
            handleChange={handleChange}
            name='max'
            id={"price"}
          />
        </div>
      </div>
      <Button size='small' value='done' type='primary' />
    </Wrapper>
  );
}

export default ByPrice;
