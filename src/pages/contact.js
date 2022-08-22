import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SEO } from '../components/Seo';
import { Layout } from '../components/Layout/Layout';
import {
  ArrowsUp,
  Phone,
  Email,
  Globe,
  GitHub,
  Discord,
  Teams,
} from '../components/Icons/Icons';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// Get in touch
const ContactPage = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <div data-testid='timelinePage' className='relative'>
          <div className='flex justify-center'>
            <VerticalTimeline
              className='!pt-20 pt-vertical-timeline'
              lineColor={'#6e6e6e'}>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                icon={<Phone />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  My czech phone number:
                </h3>

                <a
                  href='tel:+420774031464'
                  className='mt-2 block hover:underline'>
                  +420774031464
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<Phone />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  UK phone number:
                </h3>

                <a
                  href='tel:+447593408952'
                  className='mt-2 block hover:underline'>
                  +447593408952
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                icon={<Email />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Email:
                </h3>

                <a
                  href='mailto:madapeterr@gmail.com'
                  className='mt-2 block hover:underline'>
                  madapeterr@gmail.com
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<Email />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  LinkedIn:
                </h3>

                <a
                  href='https://linkedin.com/in/peter-mada'
                  target='_blank'
                  className='mt-2 block hover:underline'>
                  Peter Mada
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                icon={<Discord />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Discord:
                </h3>

                <a
                  target='_blank'
                  href='https://discordapp.com/users/PeterMada#4058/'
                  className='mt-2 block hover:underline'>
                  PeterMada#4058
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<Teams />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  MS teams:
                </h3>

                <a
                  href='https://teams.microsoft.com/l/chat/0/0?users=madapeterr@gmail.com '
                  target='_blank'
                  className='mt-2 block hover:underline'>
                  Peter Mada
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                icon={<GitHub />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  GitHub:
                </h3>

                <a
                  href='https://github.com/PeterMada'
                  target='_blank'
                  className='mt-2 block hover:underline'>
                  Peter Mada
                </a>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<ArrowsUp />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <SEO />;

const form = (
  <div>
    <form className='w-full max-w-lg mx-auto'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
            htmlFor='grid-first-name'>
            First Name
          </label>
          <input
            className='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
            id='grid-first-name'
            type='text'
          />
          <p className='text-red-500 text-xs italic hidden'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
            htmlFor='grid-last-name'>
            Last Name
          </label>
          <input
            className='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
            id='grid-last-name'
            type='text'
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
            htmlFor='grid-password'>
            E-mail
          </label>
          <input
            className='appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
            id='email'
            type='email'
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-black dark:text-green text-base mb-2'
            htmlFor='grid-password'>
            Message
          </label>
          <textarea
            className='min-h-[15rem] appearance-none block w-full bg-white dark:bg-black text-black dark:text-green border border-black dark:border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:ring-green'
            id='message'></textarea>
          <p className='text-gray-600 text-xs italic'></p>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='md:w-auto'>
          <input
            className='shadow bg-black dark:bg-green hover:bg-green dark:hover:bg-white dark:border-2 dark:border-green  text-white dark:text-black  hover:text-black focus:outline-none focus:ring focus:ring-blue-600 font-bold py-2 px-6 rounded'
            type='submit'
            title='Send'
          />
        </div>
      </div>
    </form>
  </div>
);
