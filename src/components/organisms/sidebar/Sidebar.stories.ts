import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './index';

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Aside: Story = {
  args: {},
};
