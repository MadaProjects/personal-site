import * as React from 'react';
import { Layout } from '../../src/components/Layout/Layout';
import { Typewriter } from '../components/Typewriter/Typewriter';

const IndexPage = () => {
  return (
    <Layout>
      <div data-testid='indexPage'>
        <h1>Peter Mada</h1>
        <Typewriter dynamicText='ABCDEFGHIJ' />
      </div>
    </Layout>
  );
};

export default IndexPage;
