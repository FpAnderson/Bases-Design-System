import { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  },
};

export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
  },
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    disabled: true,
  },
};

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
  },
};

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    disabled: true,
  },
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    multiline: true,
  },
};

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    disabled: true,
    multiline: true,
  },
};

export default meta;
