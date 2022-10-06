import { useState } from 'react';
import { ChoiceLabel, ChoiceWrapper, Label, LabelsWrapper } from './styles';

function Choice({ label, options }) {
  const [choice, setChoice] = useState(options[0].value);

  const handleChoice = (newChoice) => {
    return setChoice(newChoice);
  };
  return (
    <ChoiceWrapper>
      <ChoiceLabel>{label}</ChoiceLabel>
      <LabelsWrapper>
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
      </LabelsWrapper>
    </ChoiceWrapper>
  );
}

export default Choice;
