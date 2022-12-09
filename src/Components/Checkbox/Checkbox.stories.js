import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Form/Input/Checkbox",
  component: Checkbox,
  args: {
    children: "Text",
    variant: "default",
    disabled: false,
  },
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox_default = Template.bind({});

export const checkbox_active = Template.bind({});
checkbox_active.args = {
  variant: "checkbox_active",
};
export const checkbox_disabled = Template.bind({});
checkbox_disabled.args = {
  variant: "checkbox_disabled",
  disabled: true,
};

export const checkbox_error = Template.bind({});
checkbox_error.args = {
  variant: "checkbox_error",
};
export const checkbox_selected = Template.bind({});
checkbox_selected.args = {
  checked: true,
};

export const checkbox_selected_disabled = Template.bind({});
checkbox_selected_disabled.args = {
  variant: "checkbox_disabled",
  disabled: true,
  checked: true,
};
