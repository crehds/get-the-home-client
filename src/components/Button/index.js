import { cloneElement } from 'react';
import { SmallButton, DefaultButton, LargeButton } from './styles';

const BUTTONS = {
  small: <SmallButton />,
  default: <DefaultButton />,
  LargeButton: <LargeButton />
};

function Button({ size, type = '' }) {
  return cloneElement(BUTTONS[size], { className: type });
}

export default Button;
