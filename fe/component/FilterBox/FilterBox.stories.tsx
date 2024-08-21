import type { StoryObj } from "@storybook/react";
import FilterBox from "./FilterBox";
import React from "react";

const meta: { component: () => React.JSX.Element} = {
	title: 'Filter/FilterBox',
	component: FilterBox,
};

export default meta;
type Story = StoryObj<typeof FilterBox>;

export const Basic: Story = {
	args: {
		priceMax: 100,
		priceMin: 1,
		priceUnit: '€'
	},
};