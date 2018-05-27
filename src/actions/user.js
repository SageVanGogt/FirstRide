export const signinUser = (user) => {
  return ({
    type: 'SIGNIN_USER',
    user
  });
}

export const signoutUser = () => {
  return ({
    type: 'SIGNOUT_USER'
  })
}