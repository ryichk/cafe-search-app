import React from 'react';

import { PlusIcon, SearchIcon } from '../../../icons';

export const SearchConditionSettingToggle: React.FC = () => (
  <div className='flex p-1 pl-1.5 pr-3 mx-auto w-full sm:w-80 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300'>
    <SearchIcon classes='h-5 w-5 mt-0.5 text-gray-500' />
    <span className='flex-grow w-84 ml-3 pt-1 text-sm'>検索条件を設定</span>
    <PlusIcon classes='h-6 w-6 text-gray-500' />
  </div>
);
