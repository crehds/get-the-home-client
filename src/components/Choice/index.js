// import { Field } from 'formik';
import { useState } from 'react';
import { ChoiceLabel, ChoiceWrapper, Label, LabelsWrapper } from './styles';

function Choice({ id, label, options, name, handleChange, onChange, values }) {
  const [choice, setChoice] = useState(id=== "beds"? values.bedrooms : values.bathrooms);

  const handleChoice = (newChoice) => {
    console.log(newChoice)
    if (id==="beds") {
      onChange((values) => ({
        ...values,
        bedrooms: newChoice}
      ));
    } else {
      onChange((values) => ({
        ...values,
        bathrooms: newChoice}
      ));
    }
    return setChoice(newChoice);
  };

  return (
    <ChoiceWrapper>
      <ChoiceLabel>{label}</ChoiceLabel>
      <LabelsWrapper role='group' aria-labelledby='checkbox-group'>
        {options.map((option, i) => (
          <Label
            theme={{ active: option.value === choice }}
            htmlFor={`${id}-${option.value}`}
            key={`choice-${i}`}
            onClick={() => handleChoice(option.value)}
          >
            <input
              id={`${id}-${option.value}`}
              type='radio'
              value={option.value}
              defaultChecked={option.value === choice}
              name={name}
              onChange={handleChange}
            />
            <p>{option.label}</p>
          </Label>
        ))}
      </LabelsWrapper>
    </ChoiceWrapper>
  );
}

export default Choice;
