import React from "react";
import { Button } from "./Button";

export default {
  title: "Form/Control/Button",
  component: Button,
  args: {
    children: "Success",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  // children: "Primary",
};

export const primary_active = Template.bind({});
primary_active.args = {
  ...Primary.args,
  variant: "primary_active",
};

export const primary_disabled = Template.bind({});
primary_disabled.args = {
  ...Primary.args,
  variant: "primary_disabled",
};

export const primary_white = Template.bind({});
primary_white.args = {
  variant: "primary_white",
};
export const primary_white_disabled = Template.bind({});
primary_white_disabled.args = {
  variant: "primary_white_disabled",
};

export const secondary = Template.bind({});
secondary.args = {
  variant: "secondary",
};
export const secondary_active = Template.bind({});
secondary_active.args = {
  variant: "secondary_active",
};
export const secondary_disabled = Template.bind({});
secondary_disabled.args = {
  variant: "secondary_disabled",
};

export const secondary_white = Template.bind({});
secondary_white.args = {
  variant: "secondary_white",
};
export const secondary_white_active = Template.bind({});
secondary_white_active.args = {
  variant: "secondary_white_active",
};
export const secondary_white_disabled = Template.bind({});
secondary_white_disabled.args = {
  variant: "secondary_white_disabled",
};

export const flat = Template.bind({});
flat.args = {
  variant: "flat",
};
export const flat_active = Template.bind({});
flat_active.args = {
  variant: "flat_active",
};
export const flat_disabled = Template.bind({});
flat_disabled.args = {
  variant: "flat_disabled",
};

export const flat_white = Template.bind({});
flat_white.args = {
  variant: "flat_white",
};

export const flat_white_active = Template.bind({});
flat_white_active.args = {
  variant: "flat_white_active",
};

export const flat_white_disabled = Template.bind({});
flat_white_disabled.args = {
  variant: "flat_white_disabled",
};

export const secondary_dark = Template.bind({});
secondary_dark.args = {
  variant: "secondary_dark",
};

export const secondary_dark_active = Template.bind({});
secondary_dark_active.args = {
  variant: "secondary_dark_active",
};

export const secondary_dark_disabled = Template.bind({});
secondary_dark_disabled.args = {
  variant: "secondary_dark_disabled",
};
