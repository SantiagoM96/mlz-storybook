import type { Meta, StoryObj } from '@storybook/react';
import { CardWithButton } from "./CardWithButton"

const meta = {
  title: 'Example/Card',
  component: CardWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardWithButton>;

export default meta;

export const Primary: StoryObj = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    labelButton: "Ver más",
    icon: "chevron_forward",
    backgroundColor: "#fff"
  },
};

export const Secondary: StoryObj = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with light mode.',
    labelButton: "Ver más",
    icon: "chevron_forward",
    backgroundColor: "#236999"
  },
};