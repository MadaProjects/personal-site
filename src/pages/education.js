import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import {
  SchoolCap,
  WorkBriefcase,
  ArrowsUp,
  Flame,
} from '../components/Icons/Icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.scss';

const EducationPage = () => {
  return (
    <Layout>
      <div className='container'>
        <div data-testid='educationPage' className='relative'>
          <div className='flex justify-center'>
            <VerticalTimeline
              className='!pt-20 pt-vertical-timeline'
              lineColor={'#6e6e6e'}>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Feb 2020 - Aug 2022'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title'>
                  Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  London, UK
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Jun 2022'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<Flame />}>
                <h3 className='vertical-timeline-element-title'>Award</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Award
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Sep 2019 - Jun 2022'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<SchoolCap />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Tomas Bata University in Zlín
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Master's Degree in software engineering
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Dec 2018 - Dec 2019'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title'>
                  Front-end Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Brno, Czech Republic
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Jan 2016 - Now 2018'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title'>
                  Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Brno, Czech Republic
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Jul 2014 - Dec 2015'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title'>
                  Junior Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Brno, Czech Republic
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Sep 2013 - Jun 2014'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<SchoolCap />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Masaryk university
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Completed 60 credits towards a Master's Degree in
                  Computer Science
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Sep 2008 - Jun 2011'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<SchoolCap />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  University of Ss. Cyril and Methodius
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Bachelor's degree in computer science
                </h4>
                <p>Strategy, Social Media</p>
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

export default EducationPage;
