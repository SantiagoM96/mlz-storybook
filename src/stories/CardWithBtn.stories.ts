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

export const Primary: StoryObj = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with light mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#fff"
  },
};

export const Secondary: StoryObj = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#236999"
  },
};

export const Terciary: StoryObj = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#236999",
    cardBgColor: "#fff"
  },
};