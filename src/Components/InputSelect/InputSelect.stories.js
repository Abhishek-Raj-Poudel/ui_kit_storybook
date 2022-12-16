import React from "react";
import InputSelect from "./InputSelect";

export default {
  title: "Form/InputSelect",
  component: InputSelect,
  args: {},
};

const Template = (args) => <InputSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "default",
};
