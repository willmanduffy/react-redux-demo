import React, { Fragment } from 'react';

import { buttonText, letter } from './data';

const App = ({ store }) => {
  console.log('App rendered');

  return (
    <Container dispatch={store.dispatch} state={store.getState()} />
  );
};

const Container = ({ dispatch, state }) => {
  console.log('Container rendered');

  const onAlphaButtonClick = () => dispatch({ type: 'INCREASE_ALPHA' });
  const onChangeTextButtonClick = () => dispatch({ type: 'CHANGE_BUTTON_TEXT' });
  const onNumberButtonClick = () => dispatch({ type: 'INCREASE_NUMBER' });

  return (
    <Fragment>
      <Display state={state} />

      <Buttons
        onAlphaButtonClick={onAlphaButtonClick}
        onChangeTextButtonClick={onChangeTextButtonClick}
        onNumberButtonClick={onNumberButtonClick}
        state={state}
      />
    </Fragment>
  );
};

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

export default App;
