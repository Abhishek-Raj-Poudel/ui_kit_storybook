import React from "react";
import ToggleSwitch from "./ToggleSwitch";
export default {
  title: "Form/Input/Toggle",
  component: ToggleSwitch,
  args: {
    variant: "default",
    disabled: false,
  },
};
const Template = (args) => <ToggleSwitch {...args} />;

export const toggle_default = Template.bind({});

export const toggle_with_label = Template.bind({});

toggle_with_label.args = {
  title: "Toggle Switch",
  children: "subtitle",
};
