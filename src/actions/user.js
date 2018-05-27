export const signinUser = (user) => {
  return ({
    type: 'SIGNIN_USER',
    user
  });
}