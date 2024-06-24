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
    content: 'Este es el contenido de la tarjeta mostrada en modo claro con un fondo blanco.',
    containerBgColor: "#fff"
  },
};

export const BlueMode: StoryObj = {
  args: {
    content: 'Este es el contenido de la tarjeta mostrada en modo transparente con un fondo azul.',
    containerBgColor: "#236999"
  },
};

export const SolidMode: StoryObj = {
  args: {
    content: 'Este es el contenido de la tarjeta mostrada en modo sólido con un fondo azul.',
    containerBgColor: "#236999",
    isSolid: true,
  },
};