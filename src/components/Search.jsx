/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import '../assets/styles/components/Search.scss';

const main__title_text = 'What do you wanna see today?';
const main_input_placeholder = 'Search..';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'> {main__title_text} </h2>
      <input type='text' className='input' placeholder={main_input_placeholder} />
    </section>
  );
};

export default Search;
