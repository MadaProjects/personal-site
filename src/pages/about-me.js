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
            <h1 className='text-3xl text-center font-bold dark:text-green'>
              About me
            </h1>
            <div className='mt-2  dark:text-green'>
              <p className='mb-3'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Sed convallis magna eu sem. Nullam sit amet magna in magna
                gravida vehicula. Aliquam erat volutpat. Pellentesque arcu.
                Etiam dictum tincidunt diam. Mauris elementum mauris vitae
                tortor. Phasellus rhoncus. Phasellus et lorem id felis
                nonummy placerat. Maecenas fermentum, sem in pharetra
                pellentesque, velit turpis volutpat ante, in pharetra metus
                odio a lectus. Ut tempus purus at lorem. Integer malesuada.
                Phasellus rhoncus.
              </p>
              <p className='mb-3'>
                Duis pulvinar. Proin mattis lacinia justo. Maecenas
                sollicitudin. Fusce tellus. Maecenas fermentum, sem in
                pharetra pellentesque, velit turpis volutpat ante, in
                pharetra metus odio a lectus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos
                hymenaeos. Nulla pulvinar eleifend sem. Phasellus faucibus
                molestie nisl. Pellentesque arcu. Integer lacinia.
                Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy
                ac, erat. Nullam rhoncus aliquam metus. Fusce tellus. Etiam
                commodo dui eget wisi. Nam sed tellus id magna elementum
                tincidunt. Nullam feugiat, turpis at pulvinar vulputate,
                erat libero tristique tellus, nec bibendum odio risus sit
                amet ante.
              </p>
              <p>
                Maecenas lorem. Nullam rhoncus aliquam metus. Aenean
                fermentum risus id tortor. Quisque tincidunt scelerisque
                libero. Nulla accumsan, elit sit amet varius semper, nulla
                mauris mollis quam, tempor suscipit diam nulla vel leo.
                Pellentesque arcu. Praesent id justo in neque elementum
                ultrices. Aliquam erat volutpat. Donec quis nibh at felis
                congue commodo. Integer malesuada. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc tincidunt ante vitae massa. Quisque
                tincidunt scelerisque libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMePage;
