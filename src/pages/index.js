import * as React from 'react';
import { Layout } from '../../src/components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Typewriter } from '../components/Typewriter/Typewriter';

const IndexPage = () => {
  return (
    <Layout>
      <div data-testid='indexPage'>
        <h1>Peter Mada</h1>
        <Typewriter dynamicText='Developer' />
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;
