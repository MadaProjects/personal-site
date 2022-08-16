export const Header = () => {
  return (
    <header data-testid='header'>
      <div>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          data-drawer-target='drawer-navigation'
          data-drawer-toggle='drawer-navigation'
          aria-controls='drawer-navigation'>
          <span className='sr-only'>Open sidebar menu</span>
          <svg
            aria-hidden='true'
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
