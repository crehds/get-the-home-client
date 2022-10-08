import { cloneElement } from 'react';
import { SmallButton, DefaultButton, LargeButton } from './styles';

const BUTTONS = {
  small: <SmallButton />,
  default: <DefaultButton />,
  large: <LargeButton />
};

function Button({ size, type = '', value, icon, onClick }) {
  return cloneElement(BUTTONS[size], {
    onClick,
    className: type,
    children: (
      <>
        {icon}
        {value}
      </>
    )
  });
}

export default Button;
