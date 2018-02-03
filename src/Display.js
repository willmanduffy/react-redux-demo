import React, { Fragment } from 'react';

import { letter } from './data';

const Display = ({ state }) => {
  console.log('Number rendered');

  // Only needs access to 2 parts of the state
  const { alphaIndex, number } = state;

  return (
    <Fragment>
      <h1>Number: {number}</h1>
      <h1>Letter: {letter(alphaIndex)}</h1>
    </Fragment>
  )
};

export default Display;
