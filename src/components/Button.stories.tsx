import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

import { getIconSrc } from "../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Button Text",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};

export const ButtonWithIcon: Story = {
  argTypes: {
    children: { control: "text" },
  },
  args: {
    icon: getIconSrc("arrow-left.svg"),
    children: "Button Text",
  },
};

export const ButtonIconSrc: Story = {
  args: {
    icon: getIconSrc("arrow-left.svg"),
    children: null,
  },
};

export const ButtonIcon: Story = {
  args: {
    icon: <ArrowLeftIcon className="text-black h-4 aspect-square -m-4" />,
    children: null,
  },
};
