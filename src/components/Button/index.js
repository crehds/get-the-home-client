import { cloneElement } from 'react';
import { SmallButton, DefaultButton, LargeButton } from './styles';

const BUTTONS = {
  small: <SmallButton />,
  default: <DefaultButton />,
  large: <LargeButton />
};

function Button({ size, type = '', value, icon, onClick, sideIcon = 'left' }) {
  return cloneElement(BUTTONS[size], {
    onClick,
    className: type,
    children: (
      <>
        {sideIcon === 'left' && icon}
        {value}
        {sideIcon === 'right' && icon}
      </>
    )
  });
}

export default Button;
