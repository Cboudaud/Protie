// Action type
export const TYPE_VEGGIE = 'TYPE_VEGGIE';
export const TYPE_AMOUNT = 'TYPE_AMOUNT';


// Action creator
export const typeVeggie = (value) => ({
  type: TYPE_VEGGIE,
  input: value,
});

export const typeAmount = (value) => ({
    type: TYPE_AMOUNT,
    input: value,
  });
