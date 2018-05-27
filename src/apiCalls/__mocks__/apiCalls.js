const signinUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

const signupUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

export {
  signinUser,
  signupUser
}