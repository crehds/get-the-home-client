import { themes } from '@storybook/theming';
import { Global } from '@emotion/react';
import { global, reset } from '../src/styles/global';
import { addDecorator } from '@storybook/react';

addDecorator((story) => (
  <>
    <Global styles={reset} />
    <Global styles={global} />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    darkClass: 'lights-out',
    lightClass: 'lights-on'
  },
  layout: 'centered',
  margin: 0
};
