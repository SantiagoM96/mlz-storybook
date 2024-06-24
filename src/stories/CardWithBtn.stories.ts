import type { Meta, StoryObj } from '@storybook/react';
import { CardWithButton } from "./CardWithBtn"

const meta = {
  title: 'Card',
  component: CardWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardWithButton>;

export default meta;

export const LightMode: StoryObj = {
  args: {
    content: 'This is the content of the card displayed in light mode.',
    containerBgColor: "#fff"
  },
};

export const BlueMode: StoryObj = {
  args: {
    content: 'This is the content of the card displayed in blue mode.',
    containerBgColor: "#236999"
  },
};

export const SolidMode: StoryObj = {
  args: {
    content: 'This is the content of the card displayed in blue solid mode.',
    containerBgColor: "#236999",
    isSolid: true,
  },
};