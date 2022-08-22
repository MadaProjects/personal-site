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
import './timeline.scss';

const TimelinePage = () => {
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
                date='Feb 2020 - Aug 2022'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  CSL Website Design Group - London, UK
                </h4>
                <p>
                  PHP · JavaScript · Node.js · CSS3 · HTML5 · SASS ·
                  Webpack · Silverstripe
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Jun 2022'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<Flame />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Governor Award
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  For Master's thesis
                </h4>
                <p>
                  The award of the governor of the Zlin region for an
                  excellently prepared and defended diploma thesis -
                  "Web-based Information System for Data Collection and
                  Evaluation from ABA Therapies"
                </p>
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
                  Tomas Bata University - Zlín, Czechia
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Master's degree in Information Technology
                </h4>
                <p>Specialization: Software Engineering</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Dec 2018 - Dec 2019'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Front-end Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Bluesoft s.r.o - Brno, Czech Republic
                </h4>
                <p>
                  Node.js · SASS · HTML · jQuery · Kentico · JavaScript ·
                  CSS3
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Jan 2016 - Now 2018'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  STUDIO ERIGO, s.r.o. - Brno, Czech Republic
                </h4>
                <p>
                  Cascading Style Sheets (CSS) · HTML · Typo3 · Magento ·
                  jQuery · PHP · JavaScript
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Jul 2014 - Dec 2015'
                icon={<WorkBriefcase />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Junior Web Developer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Simplo s.r.o. - Brno, Czech Republic
                </h4>
                <p>
                  Cascading Style Sheets (CSS) · HTML · jQuery · PHP ·
                  JavaScript
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='Sep 2012 - Jun 2014'
                iconStyle={{
                  background: '#bcfd4c',
                  color: 'black',
                }}
                icon={<SchoolCap />}>
                <h3 className='vertical-timeline-element-title font-bold'>
                  Masaryk university - Brno, Czechia
                </h3>
                <p>
                  Completed 2/3 ECTS credits towards a Master's Degree in
                  Computer Software Engineering
                </p>
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
                  University of Ss. Cyril and Methodius - Trnava, Slovakia
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Bachelor's degree in Applied Informatics
                </h4>
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

export default TimelinePage;
