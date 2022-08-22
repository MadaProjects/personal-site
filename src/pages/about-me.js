import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import codeImg from '../../src/images/code.jpg';

const AboutMePage = () => {
  return (
    <Layout>
      <div className=' min-h-screen mx-auto pt-20 lg:pt-0'>
        <div className='flex flex-col lg:flex-row'>
          <div className='relative h-20 lg:w-1/2 lg:h-auto lg:min-h-screen'>
            <img
              className='object-cover h-full w-full absolute bottom-0 top-0 left-0 right-0'
              src={codeImg}
            />

            <span className='absolute bottom-0 top-0 left-0 right-0 bg-black opacity-40'></span>
          </div>
          <div className='px-4 py-10 container mx-auto lg:w-1/2 lg:py-20 lg:px-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-items-center	lg:justify-center'>
            <h1 className='text-3xl lg:text-4xl text-center font-bold dark:text-green mb-4 lg-mb-6'>
              About me
            </h1>
            <div className='mt-2  dark:text-green'>
              <p className='mb-3'>
                I am learning enthusiast Full Stack Developer with 8+ years
                of experience in web development.
              </p>
              <p className='mb-3'>
                I had started my career as a professional Web Developer
                after I moved to Brno (Czech Republic) and did not finish
                my Master's degree in Software Engineering (I got cca 2/3
                ECTS credits). I started working in 2014 as Junior Web
                Developer in small Agency located in Brno. During my work
                for this agency I fall in love with developing websites.
              </p>
              <p className='mb-3'>
                Throughout my work years in Brno I changed jobs so I have a
                lot of experience with developing web applications from
                front-end perspective and also from back-end perspective. I
                mastered most of the technology and procedures necessary
                for web development.
              </p>
              <p className='mb-3'>
                After few years I decide that I want to be Full Stack
                developer.
              </p>
              <p className='mb-3'>
                In 2019 I started studying at Tomas Bata University in Zlín
                (Czech Republic). After first semester I interrupted my
                study and moved to London where I work as Web Developer for
                CSL Website group. I stayed in London for one year and then
                I moved back to Czech Republic because I want to finish my
                Masters degree. I managed to balance my study and work and
                finally, in 2022 I got my Master's degree in Information
                Technology (Specialization Software Engineering).
              </p>
              <p className='mb-3'>
                I am always looking for opportunities where I can use and
                further develop my knowledge of JavaScript, React, TDD,
                Clean code and functional programming.
              </p>
              <p className='mb-3'>
                My plans for the future are to complete WAS (Web
                Accessibility Specialist) certification and learn German
                and Japanese.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMePage;
