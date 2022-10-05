import React from 'react';
import { Footer, Hero, Sales, Stories } from './components';
import {
    heroapi,
    popularsales,
    topratesales,
    highlight,
    sneaker,
    stories,
    footerAPI
} from './data/data';
import FlexContent from './components/FlexContent';

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales
          endpoint={popularsales}
          exists
        />
        <FlexContent
          endpoint={highlight}
          exists
        />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories stories={stories} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
