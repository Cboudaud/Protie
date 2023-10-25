import {
    TYPE_VEGGIE,
    TYPE_AMOUNT,
    SET_PROTEIN_RESULT,
    SET_RESULT_TEXT,

  } from '../actions/calculator';
  
  export const initialState = {
    veggieInput: '',
    amountInput:'',
    proteinResult: null,
    resultText: '',
    // errors: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case TYPE_VEGGIE: return { ...state, veggieInput: action.input };
      case TYPE_AMOUNT: return { ...state, amountInput: action.input };
      case SET_PROTEIN_RESULT: return { ...state, proteinResult: action.input };
      case SET_RESULT_TEXT: return { ...state, resultText: action.input };
   // case LOGIN_FORM_THROW_ERRORS: return { ...state, errors: action.errors };
   // case LOGIN_FORM_CLEAR: return { ...initialState };
      default:
        return state;
    }
  };
  
  export default reducer;