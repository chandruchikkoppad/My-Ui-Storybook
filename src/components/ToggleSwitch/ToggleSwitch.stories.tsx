import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "./ToggleSwitch";
import React, { useState } from "react";


const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: { type: "radio" }, 
      options: ["Automation", "Manual"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    selected: "Automation", 
    firstButton: "Automation",
    secondButton: "Manual",
    handleClick: () => {},
  },
};

export const Switch: Story = {
  render: () => {
    const ToggleSwitchWrapper = () => {
      const [selected, setSelected] = useState<string>("Automation");

      const handleChange = (selectedSwitch: string) => {
        setSelected(selectedSwitch);
      };

      return (
        <ToggleSwitch
          selected={selected}
          firstButton="Automation"
          secondButton="Manual"
          handleClick={handleChange}
        />
      );
    };

    return <ToggleSwitchWrapper />;
  },
};
