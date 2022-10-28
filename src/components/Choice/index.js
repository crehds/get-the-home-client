// import { Field } from 'formik';
import { ChoiceLabel, ChoiceWrapper, Label, LabelsWrapper } from './styles';

function Choice({ id, label, options, name, handleChange, onChange, values, setChoice, choice }) {


  const handleChoice = (newChoice) => {
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
