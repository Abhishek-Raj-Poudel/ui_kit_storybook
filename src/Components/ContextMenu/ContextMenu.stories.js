import React from "react";
import ContextMenu from "./ContextMenu";

export default {
  title: "Context_Menu",
  component: ContextMenu,
};

const Template = (args) => <ContextMenu {...args} />;

export const context_menu_default = Template.bind({});
