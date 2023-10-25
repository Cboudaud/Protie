// Action type
export const TYPE_VEGGIE = 'TYPE_VEGGIE';
export const TYPE_AMOUNT = 'TYPE_AMOUNT';
export const HANDLE_CALCULATOR = 'HANDLE_CALCULATOR'
export const SET_PROTEIN_RESULT = 'SET_PROTEIN_RESULT'
export const SET_RESULT_TEXT = 'SET_RESULT_TEXT'


// Action creator
export const typeVeggie = (value) => ({
  type: TYPE_VEGGIE,
  input: value,
});

export const typeAmount = (value) => ({
  type: TYPE_AMOUNT,
  input: value,
  });

export const handleCalculator = () => ({
  type: HANDLE_CALCULATOR,
});

export const setProteinResult = (result) => ({
  type: SET_PROTEIN_RESULT,
  input: result,
});

export const setResultText = (text) => ({
  type: SET_RESULT_TEXT,
  input: text,
});