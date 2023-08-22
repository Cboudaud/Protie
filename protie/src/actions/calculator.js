// Action type
export const SELECT_VEGGIE = 'SELECT_VEGGIE';
export const TYPE_AMOUNT = 'TYPE_AMOUNT';


// Action creator
export const selectVeggie = (value) => ({
  type: SELECT_VEGGIE,
  input: value,
});

export const typeAmount = (value) => ({
    type: TYPE_AMOUNT,
    input: value,
  });
