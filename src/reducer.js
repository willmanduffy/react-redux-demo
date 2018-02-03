export const initialState = {
  alphaIndex: 0,
  buttonTextIndex: 0,
  number: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_BUTTON_TEXT':
      return {
        ...state,
        buttonTextIndex: state.buttonTextIndex + 1
      }
    case 'INCREASE_ALPHA':
      return {
        ...state,
        alphaIndex: state.alphaIndex + 1
      }
    case 'INCREASE_NUMBER':
      return {
        ...state,
        number: state.number + 1
      }
    default:
      return state;
  }
};

export default reducer;
