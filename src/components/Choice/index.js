import { useState } from 'react';
import { ChoiceWrapper, Label } from './styles';

function Choice({ options }) {
  const [choice, setChoice] = useState(options[0].value);

  const handleChoice = (newChoice) => {
    return setChoice(newChoice);
  };
  return (
    <ChoiceWrapper>
      {options.map((option, i) => (
        <Label
          theme={{ active: option.value === choice }}
          htmlFor={option.value}
          key={`choice-${i}`}
        >
          <input
            id={option.value}
            type='checkbox'
            value={option.value}
            checked={option.value === choice}
            onChange={() => handleChoice(option.value)}
          />
          <p>{option.label}</p>
        </Label>
      ))}
    </ChoiceWrapper>
  );
}

export default Choice;
