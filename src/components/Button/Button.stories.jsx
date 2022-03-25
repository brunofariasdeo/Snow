import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text'
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled'
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: 'local_grocery_store'
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: 'local_grocery_store'
};