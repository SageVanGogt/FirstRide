const profileReducer = (state = {}, action) => {
  switch(action.type) {
    case "ADD_PROFILE":
      return action.profile;
    default:
      return state;
  };
};

export default profileReducer;