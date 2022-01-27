import { Story, Meta } from '@storybook/react';
import React from 'react';

import type { CafeInfo } from '../../../interfaces';
import Cafe from '../../../pages/cafe/[id]';

export default {
  title: 'Pages/Cafe',
  component: Cafe,
} as Meta<typeof Cafe>;

const Template: Story<{
  cafe: CafeInfo;
}> = (args) => <Cafe {...args} />;

export const SampleCafe = Template.bind({});
SampleCafe.args = {
  cafe: {
    name: 'CAFE ZENON&ZENON SAKABA ゼノン 吉祥寺店',
    catch: '厳選された熊本食材… おしゃれな店内でお食事♪',
    photo: { pc: { l: 'https://imgfp.hotp.jp/IMGH/23/25/P037332325/P037332325_238.jpg' } },
    access: 'JR中央線吉祥寺駅徒歩4分／京王井の頭線吉祥寺駅徒歩4分',
    address: '東京都武蔵野市吉祥寺南町２‐１１‐３',
    station_name: '吉祥寺',
    open: '月～土、祝前日: 11:30～23:00 （料理L.O. 22:00 ドリンクL.O. 22:30）日、祝日: 11:30～22:00 （料理L.O. 21:00 ドリンクL.O. 21:30）',
    midnight: '営業していない',
    close: '不定休',
    lunch: 'あり',
    course: 'あり',
    free_drink: 'あり',
    free_food: 'なし',
    english: 'なし',
    budget: { average: '2000円（通常平均）3000円（宴会平均）880円（ランチ平均）' },
    budget_memo: '',
    card: '利用可',
    capacity: '105',
    private_room: 'あり',
    horigotatsu: 'なし',
    tatami: 'なし',
    party_capacity: '105',
    wedding: '各種パーティ大歓迎',
    charter: '貸切可 ：応相談',
    wifi: 'あり',
    parking: 'なし',
    child: 'お子様連れ歓迎',
    barrier_free: 'あり',
    pet: '可',
    shop_detail_memo: 'テラス席はワンちゃんもOK！ベビーカーもＯＫです！',
    other_memo: '',
    urls: { pc: 'https://www.hotpepper.jp/strJ000763923/?vos=nhppalsa000016' },
  },
};
