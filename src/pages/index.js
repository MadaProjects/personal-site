import * as React from 'react';

import { Typewriter } from '../components/Typewriter/Typewriter';

const IndexPage = () => {
  return (
    <main data-testid='indexPage'>
      <h1>Peter Mada</h1>
      <Typewriter dynamicText='ABCDEFGHIJ' />
    </main>
  );
};

export default IndexPage;
