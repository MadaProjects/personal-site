import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { stack } from '../data/stack';
import './stack.scss';

const StackPage = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const suffledLogos = stack ? shuffleArray(stack) : [];

  return (
    <Layout>
      <div className='container mx-auto min-h-screen pt-20 pb-10  px-4'>
        <h1 className='mb-6 text-3xl text-center font-bold dark:text-green'>
          My favorite stack
        </h1>
        <div className='flex flex-wrap justify-center justify-items-center'>
          {suffledLogos.map((tech, i) => (
            <a
              href={tech.url}
              target='_blank'
              className='group  w-1/4 md:w-1/6 mx-4 lg:mx-6 my-6 lg:my-10 max-h-12 lg:max-h-16 min-h-[50px] '>
              <img
                src={tech.img}
                alt={tech.name}
                className='group group-hover:scale-125 object-contain	w-full h-full lg:max-w-[150px] m-auto'
              />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StackPage;
