import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "Form/Radio",
  component: RadioButton,
  args: {
    children: "Text",
    variant: "default",
    disabled: false,
  },
};

const Template = (args) => <RadioButton {...args} />;

export const default_Radio = Template.bind({});

export const radio_checked = Template.bind({});

radio_checked.args = {
  checked: true,
};
export const radio_disabled = Template.bind({});

radio_disabled.args = {
  variant: "radio_label_disabled",
  disabled: true,
};
