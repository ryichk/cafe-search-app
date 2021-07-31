import Image from 'next/image';
import React from 'react';

import { HeartIcon, LocationIcon } from '../icons';
import type { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({ loading, name, imageURL, catchCopy, area }) => {
  {
    return loading ? (
      <div className='bg-white h-36 my-6 p-2 max-w-sm mx-auto rounded-lg shadow-md grid flex items-center space-x-4'>
        <div className='text-center text-2xl'>Loading...</div>
      </div>
    ) : (
      <div className='p-2 max-w-sm mx-auto bg-white rounded-lg shadow-md flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <Image src={imageURL} width={130} height={130} alt={name} className='rounded-lg' />
        </div>
        <div className='flex-grow'>
          <div className='mt-1 text-md font-semibold tracking-wide text-gray-700'>{name}</div>
          <p className='my-2 text-xs text-gray-500'>{catchCopy}</p>
          <div>
            <LocationIcon classes={'inline h-4 w-4 mr-1 text-gray-500'} />
            <div className='inline-block text-xs text-gray-500'>{area}</div>
            {/* <HeartIcon classes={'h-5 w-5 m-1 text-gray-500 float-right'} /> */}
          </div>
        </div>
      </div>
    );
  }
};
