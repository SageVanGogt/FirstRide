const signinUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

export {
  signinUser
}