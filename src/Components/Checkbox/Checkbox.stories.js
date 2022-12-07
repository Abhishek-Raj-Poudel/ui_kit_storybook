import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Form/Input/Checkbox",
  component: Checkbox,
  args: {
    children: "Text",
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Unselected = Template.bind({});
