import * as React from 'react';
import { Seo } from '../components/Seo';
import { Layout } from '../components/Layout/Layout';
import {
  ArrowsUp,
  Phone,
  Email,
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
      <div className='container mx-auto' id='main'>
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
                  rel='noreferrer nofollow'
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
                  rel='noreferrer nofollow'
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
                  rel='noreferrer nofollow'
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
                  rel='noreferrer nofollow'
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

export const Head = () => (
  <Seo description='Contact me - Personal website of full stack developer Peter Mada' />
);
