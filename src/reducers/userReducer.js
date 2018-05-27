const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "SIGNIN_USER":
      return action.user;
    case "SIGNOUT_USER":
      return {};
    default:
      return state;
  }
}

export default userReducer;