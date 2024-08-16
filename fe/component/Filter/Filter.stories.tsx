import type { StoryObj } from "@storybook/react";
import Filter from "./Filter";
import React from "react";

const meta: { component: () => React.JSX.Element} = {
	title: 'Filter',
	component: Filter
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Basic: Story = {
	args: {
		max: 100,
		min: 1,
		unit: '€'
	}
};