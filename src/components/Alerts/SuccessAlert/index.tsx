import React, { useContext } from 'react';

import { AlertContext } from '../../../contexts';
import { CloseIcon, InfoIcon } from '../../../icons';
import { AlertProps } from '../Alert';

export const SuccessAlert: React.FC<AlertProps> = ({ message }) => {
  const { setIsSuccess } = useContext(AlertContext);

  return (
    <div className='fixed w-full alert bg-green-100 text-success shadow-md z-50'>
      <div className='flex-1'>
        <InfoIcon />
        <label>{message}</label>
        <div className='mx-2' onClick={() => setIsSuccess(false)}>
          <CloseIcon classes='fixed right-2' />
        </div>
      </div>
    </div>
  );
};
