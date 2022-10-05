import CreateSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourStyles } from './styles';
import Option from './Option';

const animatedComponents = makeAnimated({ Option });
function Select({
  name = '',
  options = [],
  multiple = false,
  labelValue,
  placeholder = 'Select...'
}) {
  return (
    <>
      <label htmlFor={name}>{labelValue}</label>
      <CreateSelect
        id={name}
        options={options}
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={multiple}
        styles={colourStyles}
        placeholder={placeholder}
      />
    </>
  );
}

export default Select;
