import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchForm } from '.';

export default {
  title: 'Components/SearchModal/SearchForm',
  component: SearchForm,
} as Meta<typeof SearchForm>;

const Template: Story = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
