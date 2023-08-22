import {
    TYPE_VEGGIE,
    TYPE_AMOUNT,

  } from '../actions/calculator';
  
  export const initialState = {
    veggieInput: '',
    amountInput:'',
    // errors: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case TYPE_VEGGIE: return { ...state, veggieInput: action.input };
      case TYPE_AMOUNT: return { ...state, amountInput: action.input };
   // case LOGIN_FORM_THROW_ERRORS: return { ...state, errors: action.errors };
   // case LOGIN_FORM_CLEAR: return { ...initialState };
      default:
        return state;
    }
  };
  
  export default reducer;