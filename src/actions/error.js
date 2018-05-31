
export const addError = (error) => {
  return ({
    type: "ADD_ERROR", 
    error
  });
};