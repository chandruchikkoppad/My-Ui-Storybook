import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import OsTree from "./OsTree";


const meta: Meta<typeof OsTree> = {
  title: "Components/OsTree",
  component: OsTree,
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center", "right","top","bottom"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OsTree>;

export const Default: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    align: "center",
  },
};

export const FewChildren: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows"],
    align: "center",
  },
};

export const ManyChildren: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: [
      "Mac OS",
      "Windows",
      "Linux",
      "IOS",
      "Android",
      "Chrome OS",
      "Ubuntu",
      "Fedora",
    ],
    align: "center",
  },
};


export const LeftAligned: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    align: "left",
  },
};

export const RightAligned: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    align: "right",
  },
};

export const VerticalTree: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    direction: "vertical",
  },
};

export const VerticalTree_TopAligned: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    align: "top",
    direction: "vertical",
  },
};

export const VerticalTree_BottomAligned: Story = {
  args: {
    rootLabel: "Automation",
    childrenLabels: ["Mac OS", "Windows", "Linux", "IOS", "Android"],
    align: "bottom",
    direction: "vertical",  
  },
};