import React from "react";
import Badge from "./Badge";

export default {
  title: "Badge",
  component: Badge,
  args: {
    children: "Your text",
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};
export const White = Template.bind({});
White.args = {
  variant: "white",
  children: "White",
};
