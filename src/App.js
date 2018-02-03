import React, { Fragment } from 'react';

import Buttons from './Buttons';
import Display from './Display';

const App = ({ store }) => {
  return (
    <Container dispatch={store.dispatch} state={store.getState()} />
  );
};

const Container = ({ dispatch, state }) => {
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

export default App;
