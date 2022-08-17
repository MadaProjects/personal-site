import * as React from 'react';
import * as layoutStyles from './Header.module.scss';

export const Header = () => {
  return (
    <div className=''>
      <header
        data-testid='header'
        className='container mx-auto fixed top-0 left-0 right-0 py-4'>
        <div className='flex justify-end'>
          <button
            className={`${layoutStyles.drawerButton} text-white hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
            type='button'
            data-drawer-target='drawer-navigation'
            data-drawer-toggle='drawer-navigation'
            aria-controls='drawer-navigation'>
            <span className='sr-only'>Open sidebar menu</span>
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='gray'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#bcfd4c'
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'></path>
            </svg>
          </button>
        </div>
      </header>

      <div
        id='drawer-navigation'
        data-testid='drawer'
        className='fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full'
        tabIndex='-1'
        aria-labelledby='drawer-navigation-label'>
        <h5
          id='drawer-navigation-label'
          className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
          Menu
        </h5>
        <button
          type='button'
          data-drawer-dismiss='drawer-navigation'
          aria-controls='drawer-navigation'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto'>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>About me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
