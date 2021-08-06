import Image from 'next/image';
import React from 'react';

import { CloseIcon } from '../../icons';
import { CafeDetailProps } from './CafeDetail';

export const CafeDetail: React.FC<CafeDetailProps> = ({
  id,
  imageURL,
  name,
  catchCopy,
  stationName,
  access,
  address,
  businessHours,
  closeDay,
  budget,
  card,
  capacity,
  wifi,
  parking,
  pet,
  cafeURL,
}) => (
  <div className='card bg-white mt-auto max-w-lg'>
    <figure className='p-4'>
      <Image
        src={imageURL}
        alt={name}
        width={485}
        height={300}
        className='h-64 rounded-lg shadow-lg'
      />
    </figure>
    <div className='card-body py-3 px-5'>
      <h2 className='card-title text-2xl'>{name}</h2>
      <p>{catchCopy}</p>
      <div className='mt-7 mb-3'>
        <h3 className='font-semibold mb-1'>最寄駅</h3>
        <p>{stationName}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>アクセス</h3>
        <p>{access}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>住所</h3>
        <p>{address}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>営業時間</h3>
        <p>{businessHours}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>定休日</h3>
        <p>{closeDay}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>予算</h3>
        <p>{budget}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>カード決済</h3>
        <p>{card}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>総席数</h3>
        <p>{capacity}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>Wifi</h3>
        <p>{wifi}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>駐車場</h3>
        <p>{parking}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>ペット</h3>
        <p>{pet}</p>
      </div>
      <div className='my-3'>
        <h3 className='font-semibold mb-1'>店舗URL</h3>
        <a href={cafeURL} target='blank' className='link link-primary'>
          {cafeURL}
        </a>
      </div>
    </div>
    <div className='modal-action'>
      <label htmlFor={id} className='mb-5 mr-4'>
        <CloseIcon />
      </label>
    </div>
  </div>
);