import type { StoryObj } from "@storybook/react";
import ErrorMessage from "@/component/ErrorMessage/ErrorMessage";

const meta: { component: () => React.JSX.Element} = {
	title: 'Error Message',
	component: ErrorMessage
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>

export const Basic: Story = {
	args: {
		message: 'It should be number!'
	}
}