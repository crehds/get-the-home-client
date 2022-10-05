import { components } from 'react-select';
import { OptionWrapper } from './styles';

function Option(props) {
  return (
    <OptionWrapper>
      <components.Option {...props}>
        <input
          type='checkbox'
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </components.Option>
    </OptionWrapper>
  );
}

export default Option;
