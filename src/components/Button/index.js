import { cloneElement } from 'react';
import { SmallButton, DefaultButton, LargeButton } from './styles';

const BUTTONS = {
  small: <SmallButton />,
  default: <DefaultButton />,
  large: <LargeButton />
};

function Button({ size, type = '', value }) {
  return cloneElement(BUTTONS[size], { className: type, children: value });
}

export default Button;
