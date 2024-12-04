import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from './index';

const meta = {
  title: 'Input',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputTextField: Story = {
  args: {
    // onChange: fn(),
    type: 'text',
    // value: 'Hello',
    name: 'hello',
    placeholder: 'Your Name Sir',
  },
};

export const InputTextField2: Story = {
  args: {
    type: 'text',
    name: 'hello',
    placeholder: 'Your Name Sir',
  },
};
