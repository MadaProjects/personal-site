import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as headerStyles from './Header.module.scss';
import myCV from '../../pdf/peterMadaCV.pdf';

export const Header = ({ onDarkModeClick, onPauseClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuClick = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div className='z-40 relative'>
      <header
        data-testid='header'
        className={` ${
          show ? 'show' : 'hidden'
        } header container mx-auto fixed top-0 left-0 right-0 py-4`}>
        <div className='flex justify-end'>
          <button
            onClick={onDarkModeClick}
            className={`other-button text-white hover:bg-green focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-green focus:outline-none dark:focus:ring-green`}>
            <span className='sr-only'>Dark mode</span>
            <svg
              className='w-6 h-6 hidden dark:block'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'></path>
            </svg>
            <svg
              className='w-6 h-6 dark:hidden'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'></path>
            </svg>
          </button>
          <button
            className={`${headerStyles.drawerButton} drawer-button text-white hover:bg-green focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-green focus:outline-none dark:focus:ring-green`}
            type='button'
            data-drawer-target='drawer-navigation'
            data-drawer-toggle='drawer-navigation'
            aria-controls='drawer-navigation'
            onClick={handleMenuClick}>
            <span className='sr-only'>Open sidebar menu</span>
            <svg
              aria-hidden='true'
              className='w-6 h-6'
              fill='gray'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill=''
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
        className={`${
          openDrawer ? 'transform-none' : '-translate-x-full'
        } fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-primary transition-transform left-0 top-0 `}
        aria-labelledby='drawer-navigation-label'
        aria-hidden={openDrawer ? 'false' : 'true'}>
        <button
          type='button'
          data-drawer-dismiss='drawer-navigation'
          aria-controls='drawer-navigation'
          tabIndex={openDrawer ? '0' : '-1'}
          onClick={handleMenuClick}
          className='text-gray-400 bg-transparent hover:bg-green hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
          <span className='sr-only'>Close menu</span>
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
        </button>
        <div className='py-4 overflow-y-auto'>
          <div className='flex flex-col items-center mb-1'>
            <StaticImage
              className='p-1 w-30 h-30 mb-3 rounded-full ring-2 ring-green dark:ring-white'
              src='../../images/peto.webp'
              alt='Ing. Peter Mada'
              width={140}
              height={140}
            />

            <span className='self-center text-xl xl:text-2xl font-semibold whitespace-nowrap text-primary dark:text-green'>
              Peter Mada
            </span>
          </div>
          <div className={`social flex items-center justify-center mb-5`}>
            <a
              tabIndex={openDrawer ? '0' : '-1'}
              href='mailto:madapeterr@gmail.com'
              className='mx-1 rounded-lg p-2 hover:bg-green dark:hover:bg-transparent'>
              <span className='sr-only'>Email</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'></path>
              </svg>
            </a>
            <a
              tabIndex={openDrawer ? '0' : '-1'}
              href='tel:+420774031464'
              className='mx-1 rounded-lg p-2 hover:bg-green dark:hover:bg-transparent'>
              <span className='sr-only'>My czech phone number</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
              </svg>
            </a>
            <a
              tabIndex={openDrawer ? '0' : '-1'}
              href='tel:+447593408952'
              className='mx-1 rounded-lg p-2 hover:bg-green dark:hover:bg-transparent'>
              <span className='sr-only'>My UK phone number</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            </a>
            <a
              tabIndex={openDrawer ? '0' : '-1'}
              href='https://linkedin.com/in/peter-mada'
              target='_blank'
              rel='noreferrer nofollow'
              className='mx-1 rounded-lg p-2 hover:bg-green dark:hover:bg-transparent'>
              <span className='sr-only'>Peter Mada Linkedin profile</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                />
              </svg>
            </a>
          </div>
          <ul className='space-y-2'>
            <li>
              <Link
                tabIndex={openDrawer ? '0' : '-1'}
                to='/'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'>
                <svg
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span className='ml-3'>Home</span>
              </Link>
            </li>

            <li>
              <Link
                tabIndex={openDrawer ? '0' : '-1'}
                to='../about-me'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'>
                <svg
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
                </svg>
                <span className='ml-3'>About me</span>
              </Link>
            </li>

            <li>
              <Link
                tabIndex={openDrawer ? '0' : '-1'}
                to='../timeline'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                  />
                </svg>
                <span className='ml-3'>My Timeline</span>
              </Link>
            </li>
            <li>
              <a
                tabIndex={openDrawer ? '0' : '-1'}
                href={myCV}
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'
                download>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                  />
                </svg>
                <span className='ml-3'>Resume</span>
              </a>
            </li>

            <li>
              <Link
                tabIndex={openDrawer ? '0' : '-1'}
                to='../stack'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'>
                <svg
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'></path>
                </svg>
                <span className='ml-3'>My stack</span>
              </Link>
            </li>

            <li>
              <Link
                tabIndex={openDrawer ? '0' : '-1'}
                to='../contact'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green dark:hover:bg-gray-700'>
                <svg
                  className='w-6 h-6 text-gray-500  transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                </svg>
                <span className='ml-3'>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={handleMenuClick}
        onKeyDown={handleMenuClick}
        role='button'
        tabIndex={openDrawer ? '0' : '-1'}
        className={` ${
          openDrawer ? 'block' : 'hidden'
        } bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30`}>
        <span className='sr-only'>Background overlay for open menu</span>
      </div>
    </div>
  );
};
