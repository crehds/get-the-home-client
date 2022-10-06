import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { colors } from '../../../styles/colors';
import { Label, NumberLabel, NumberWrapper } from './styles';

function Number({ id, icon = true, name, value, placeholder, label }) {
  return (
    <NumberWrapper>
      {label && <NumberLabel>{label}</NumberLabel>}
      <Label htmlFor={id} theme={{ icon }}>
        {icon && (
          <RiMoneyDollarCircleLine
            size={20}
            color={colors.gray}
            style={{ position: 'absolute', bottom: '10px', left: '8px' }}
          />
        )}
        <input
          type='number'
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </Label>
    </NumberWrapper>
  );
}

export default Number;
