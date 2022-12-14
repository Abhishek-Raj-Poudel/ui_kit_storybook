import React from "react";
import Filter from "./Filter";

export default {
  title: "Filter",
  component: Filter,
  args: {
    children: ["Left", "Middle1", "Middle2", "Right"],
  },
};

const Template = (args) => <Filter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "default",
};
