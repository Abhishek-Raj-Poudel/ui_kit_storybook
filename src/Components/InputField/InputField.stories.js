import React from "react";
import InputField from "./InputField";

export default {
  title: "Form/InputField",
  component: InputField,
  args: {
    label: "Your Name",
    placeholder: "Your Name",
    disabled: false,
    readonly: false,
    error: "",
  },
};

const Template = (args) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "default",
};
export const Error = Template.bind({});
Error.args = {
  variant: "input_field_error",
  error: "This is needed",
};
export const Success = Template.bind({});
Success.args = {
  variant: "input_field_success",
};
