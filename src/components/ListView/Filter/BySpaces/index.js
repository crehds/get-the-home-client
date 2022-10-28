import Button from '../../../Button';
import Choice from '../../../Choice';
import { useState, useEffect } from 'react';
import { Wrapper } from './styles';

const options = [
  { value: '', label: 'Any' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' }
];
function BySpaces({onChange, values, setIsOpen}) {
  const [choice1, setChoice1] = useState(values.bedrooms);
  const [choice2, setChoice2] = useState(values.bathrooms);

    useEffect(() => {
      onChange((values) => ({
          ...values,
          bedrooms: choice1,
          bathrooms: choice2
      }))
    }, [choice1, choice2, onChange]);

  return (
    <Wrapper>
      <Choice id='beds' label='beds' options={options} choice={choice1} setChoice={setChoice1}  />
      <Choice id='baths' label='baths' options={options} choice={choice2} setChoice={setChoice2} />
      <Button size='small' value='done' type='primary' onClick={() => setIsOpen(false)}/>
    </Wrapper>
  );
}

export default BySpaces;
