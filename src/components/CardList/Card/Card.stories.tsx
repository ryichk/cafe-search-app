import { Story, Meta } from '@storybook/react';
import React from 'react';

import type { CardProps } from './Card';
import { Card } from '.';

export default {
  title: 'Components/CardList/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  name: 'and people jinnan (アンドピープル神南)',
  imageURL: 'https://imgfp.hotp.jp/IMGH/62/45/P021566245/P021566245_480.jpg',
  catchCopy: '海外の廃墟がコンセプトのダイニングバー★',
  genre: 'カフェ・スイーツ / ダイニングバー・バル',
  area: '東京 渋谷',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
