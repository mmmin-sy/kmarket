import type { StoryObj } from "@storybook/react";
import SelectBox, {SelectBoxProps} from "@/component/SelectBox/SelectBox";
import React from "react";

const meta: { component: (props: SelectBoxProps) => React.JSX.Element} = {
	title: 'Form/SelectBox',
	component: SelectBox
}

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Text: Story = {
	args: {
		options: [
			{value: 'apple', text: 'Test01'},
			{value: 'orange', text: 'Test02'},
			{value: 'grape', text: 'Test03'}
		]
	}
}

export const Icon: Story = {
	args: {
		options: [
			{value: 'icon1', img: '/images/en.png'},
			{value: 'icon2', img: '/images/ko.png'},
			{value: 'icon3', img: '/images/de.png'}
		]
	}
}

export const TextWithIcon: Story = {
	args: {
		options: [
			{value: 'icon1', text: 'Icon1', img: '/images/en.png'},
			{value: 'icon2', text: 'Icon2', img: '/images/ko.png'},
			{value: 'icon3', text: 'Icon3', img: '/images/de.png'}
		]
	}
}