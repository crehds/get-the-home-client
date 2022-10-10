import { AiOutlineMinus } from 'react-icons/ai';
import Button from '../../../Button';
import Check from '../../../Inputs/Check';
import Number from '../../../Inputs/Number';
import { Wrapper } from './styles';

function More({onChange,  values }) {
  function handleChangePets({ target }) {
    onChange((values) => ({
      ...values,
      pets: target.checked
    }));
  }
  return (
    <Wrapper>
      <Check value='Pets Allowed' onChange={handleChangePets} />
      <div>
        <p>salary range</p>
        <div>
          <Number placeholder='min' icon={false} 
            value={values.area['min']}
            functionChange={onChange}
            name='min'
            id={"area"}/>
          <AiOutlineMinus size={24} />
          <Number placeholder='max' icon={false} 
            value={values.area['max']}
            functionChange={onChange}
            name='max'
            id={"area"} />
        </div>
      </div>
      <Button size='small' type='primary' value='done' />
    </Wrapper>
  );
}

export default More;
