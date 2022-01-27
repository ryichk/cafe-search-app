import { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import hotpepperImg from '../../assets/images/hotpepper-s.gif';
import { Map } from '../../components';
import type { CafeInfo, HotpepperResponse } from '../../interfaces';
import { Header, Footer } from '../../layouts';

const Cafe: NextPage<{
  cafe: CafeInfo;
}> = ({ cafe }) => {
  const cafeInfo = {
    アクセス: cafe.access,
    住所: cafe.address,
    最寄駅: cafe.station_name,
    営業時間: cafe.open,
    '23時以降': cafe.midnight,
    定休日: cafe.close,
    ランチ: cafe.lunch,
    コース: cafe.course,
    飲み放題: cafe.free_drink,
    食べ放題: cafe.free_food,
    英語メニュー: cafe.english,
    予算: cafe.budget.average,
    予算備考: cafe.budget_memo,
    カード決済: cafe.card,
    総席数: `${cafe.capacity}席`,
    個室: cafe.private_room,
    掘りごたつ: cafe.horigotatsu,
    座敷: cafe.tatami,
    パーティ収容人数: `${cafe.party_capacity}人`,
    'ウェディング・二次会利用': cafe.wedding,
    貸切: cafe.charter,
    Wifi: cafe.wifi,
    駐車場: cafe.parking,
    お子様連れ: cafe.child,
    バリアフリー: cafe.barrier_free,
    ペット: cafe.pet,
    お店の詳細: cafe.shop_detail_memo,
    その他: cafe.other_memo,
  };

  return (
    <>
      <NextSeo
        title={cafe.name}
        description={cafe.catch}
        canonical={`https://cafe-shares.com/cafe/${cafe.id}`}
        openGraph={{
          images: [
            {
              url: cafe.photo.pc.l,
              alt: cafe.name,
            },
          ],
          url: `https://cafe-shares.com/cafe/${cafe.id}`,
          title: cafe.name,
          description: cafe.catch,
        }}
      />
      <Header />
      <div className='pt-32 dark:bg-dark dark:text-gray-300'>
        <div className='m-auto max-w-5xl mt-5 p-5 sm:p-14 rounded-t-xl'>
          <div className='m-auto mb-3'>
            <Image src={hotpepperImg} alt='hotpepper' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold'>{cafe.name}</h1>
          <div className='my-5'>
            <p className='text-lg sm:text-xl'>{cafe.catch}</p>
          </div>
          <div className='mb-5'>
            <div
              className='h-56 sm:h-96 rounded'
              style={{
                background: `no-repeat center / cover url(${cafe.photo.pc.l})`,
              }}
            />
            <div className='mt-5'>
              <Map
                center={{ lat: cafe.lat, lng: cafe.lng }}
                zoom={13}
                containerStyle={{ width: '100%', height: '200px' }}
              />
            </div>
            <div className='mt-5'>
              {Object.entries(cafeInfo).map(([key, value]) => (
                <div className='flex border-t py-3' key={key}>
                  <div className='w-1/4 font-bold'>{key}</div>
                  <div className='w-3/4 ml-1'>{value}</div>
                </div>
              ))}
              <div className='border-t border-b py-3'>
                <div className='font-semibold'>店舗URL</div>
                <div className='mt-1'>
                  <a
                    href={cafe.urls.pc}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link link-primary'
                  >
                    {cafe.urls.pc}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const URL = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&id=${id}`;
  let cafe: CafeInfo | null = null;
  try {
    const res = await fetch(URL);
    const data: HotpepperResponse = await res.json();
    cafe = data.results.shop[0];
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      cafe,
    },
  };
};

export default Cafe;
