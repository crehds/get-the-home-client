import { Icon } from '.';
import { icons } from './icons';

const options = icons.map((data) => data.name);
const iconsMap = icons.reduce(
  (memo, data) => ({ ...memo, [data.name]: data.icon }),
  {}
);
const labels = icons.reduce(
  (memo, data) => ({ ...memo, [data.name]: data.name }),
  {}
);

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    children: {
      options: options,
      mapping: iconsMap,
      control: {
        type: 'select',
        labels
      }
    }
  }
};

const Template = (args) => <Icon {...args} />;

export const Example = Template.bind({});
Example.args = { children: icons[0].icon, size: 60 };
