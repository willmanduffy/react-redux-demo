import React, { Fragment } from 'react';

import { buttonText, letter } from './data';

const Buttons = ({ onAlphaButtonClick, onChangeTextButtonClick, onNumberButtonClick, state }) => {
  console.log('Button rendered');

  // Needs access to all parts of the state
  const { alphaIndex, buttonTextIndex, number } = state;
  const baseButtonText = buttonText(buttonTextIndex);
  const alphaButtonText = `${baseButtonText}: ${letter(alphaIndex + 1)}`;
  const numberButtonText = `${baseButtonText}: ${number + 1}`;

  return (
    <Fragment>
      <button onClick={onAlphaButtonClick}>
        {alphaButtonText}
      </button>

      <button onClick={onNumberButtonClick}>
        {numberButtonText}
      </button>

      <button onClick={onChangeTextButtonClick}>
        Change Button Text
      </button>
    </Fragment>
  );
};

export default Buttons;
