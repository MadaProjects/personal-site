import * as React from 'react';
import { Layout } from '../components/Layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen pt-20 pb-10 lg:pt-0 px-4'>
        <h1 className='mb-6 text-3xl text-center font-bold dark:text-green'>
          Contact me
        </h1>

        <div className='flex flex-col'>
          <div></div>
        </div>

        <div>
          <form class='w-full max-w-lg mx-auto'>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  class='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
                  for='grid-first-name'>
                  First Name
                </label>
                <input
                  class='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
                  id='grid-first-name'
                  type='text'
                />
                <p class='text-red-500 text-xs italic hidden'>
                  Please fill out this field.
                </p>
              </div>
              <div class='w-full md:w-1/2 px-3'>
                <label
                  class='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
                  for='grid-last-name'>
                  Last Name
                </label>
                <input
                  class='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
                  id='grid-last-name'
                  type='text'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
                  for='grid-password'>
                  E-mail
                </label>
                <input
                  class='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
                  id='email'
                  type='email'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='w-full px-3'>
                <label
                  class='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
                  for='grid-password'>
                  Message
                </label>
                <textarea
                  class='min-h-[15rem] appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
                  id='message'></textarea>
                <p class='text-gray-600 text-xs italic'>
                  Re-size can be disabled by set by resize-none / resize-y
                  / resize-x / resize
                </p>
              </div>
            </div>
            <div class='flex justify-end'>
              <div class='md:w-auto'>
                <button
                  class='shadow bg-black dark:bg-green hover:bg-green dark:hover:bg-white dark:border-2 dark:border-green  text-white dark:text-black  hover:text-black focus:outline-none focus:ring focus:ring-blue-600 font-bold py-2 px-6 rounded'
                  type='button'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
