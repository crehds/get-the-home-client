import { components } from 'react-select';
import Check from '../../Inputs/Check';
import { OptionWrapper } from './styles';

function Option(props) {
  return (
    <OptionWrapper>
      <components.Option {...props}>
        <Check
          checked={props.isSelected}
          onChange={() => null}
          id={props.label}
          name={props.label}
          value={props.label}
        />
      </components.Option>
    </OptionWrapper>
  );
}

export default Option;
