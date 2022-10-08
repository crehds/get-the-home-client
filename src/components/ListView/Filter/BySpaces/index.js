import Button from '../../../Button';
import Choice from '../../../Choice';
import { Wrapper } from './styles';

const options = [
  { value: '', label: 'Any' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' }
];
function BySpaces() {
  return (
    <Wrapper>
      <Choice id='beds' label='beds' options={options} />
      <Choice id='baths' label='baths' options={options} />
      <Button size='small' value='done' type='primary' />
    </Wrapper>
  );
}

export default BySpaces;
