import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    isHovered: {control: 'boolean'},
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'View All',
  // label: `I'm :hover`
};
Primary.args = {
  label: isChromatic() ? `I'm in Chromatic` : `Not in Chromatic`,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  isHovered: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

// export const ActiveState = Template.bind({});
// ActiveState.args = {
//   isActive: true,
//   label: `I'm :active`
// };