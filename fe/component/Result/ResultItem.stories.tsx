import type { StoryObj } from "@storybook/react";
import ResultItem, { ResultItemProps } from "@/component/Result/ResultItem";
import React from "react";

const meta: { component: (props: ResultItemProps) => React.JSX.Element} = {
	title: 'Result/ResultItem',
	component: ResultItem,
};

export default meta;
type Story = StoryObj<typeof ResultItem>;

export const Basic: Story = {
	args: {
		item: {
			title: 'Sample Product',
			link: 'http://google.com',
			portion: '10€/kg',
			price: '25.67',
			market: 'Market'
		}
	}
};