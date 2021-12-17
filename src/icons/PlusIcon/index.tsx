import React from 'react';

import type { IconProps } from '../icon';

export const PlusIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={classes}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
  </svg>
);
