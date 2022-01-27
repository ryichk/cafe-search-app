import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, VFC } from 'react';
import { useTheme } from 'next-themes';

import { HomeIcon, MoonIcon, SunIcon } from '../../icons';
import { SearchModal } from '../../components';

export const Header: VFC = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <>
      <header className='fixed bg-base-100 shadow-md pb-3 w-full z-40 dark:bg-dark dark:shadow-gray-800'>
        <div className='flex relative sm:mx-auto pt-8 pl-4 pb-5'>
          <div className='w-48 text-center'>
            <Link href='/'>
              <a>
                <span className='text-2xl font-bold dark:text-gray-300'>Cafe Search</span>
              </a>
            </Link>
          </div>
          <div className='absolute top-5 right-3 xs:right-40 dropdown dropdown-end'>
            <button tabIndex={0} className='btn btn-square btn-ghost drawer-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className='menu p-4 w-max bg-base-content dropdown-content rounded-box shadow-2xl text-white'
            >
              <li>
                <div className='flex mx-auto mb-2'>
                  <label htmlFor='theme-change-toggle'>
                    <SunIcon
                      classes={`h-6 mr-1 ${mounted && theme === 'light' ? 'text-secondary' : ''}`}
                    />
                  </label>
                  <input
                    id='theme-change-toggle'
                    type='checkbox'
                    className='toggle h-6'
                    checked={theme === 'light' ? false : true}
                    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  />
                  <label htmlFor='theme-change-toggle'>
                    <MoonIcon
                      classes={`h-6 ml-1 ${mounted && theme === 'dark' ? 'text-yellow-100' : ''}`}
                    />
                  </label>
                </div>
              </li>
              <li className={router.pathname === '/' ? 'text-primary' : ''}>
                <Link href='/'>
                  <a>
                    <HomeIcon classes='h-5 sm:h-7 mr-1' />
                    HOME
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='sm:absolute sm:top-8 sm:left-56 mx-4'>
          <SearchModal />
        </div>
      </header>
    </>
  );
};
