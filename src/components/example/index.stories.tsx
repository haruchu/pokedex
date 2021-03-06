import { ComponentStory } from "@storybook/react";
import React from "react";
import { Example } from "./index";
import Data from "../../data/pokemon-data.json";

export default {
  title: "example/Example",
  component: Example,
};

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: Data[0].name,
};
