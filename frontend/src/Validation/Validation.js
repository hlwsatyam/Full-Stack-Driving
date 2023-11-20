const isPasswordValid = (password) => {
  return password.length > 5 ? true : false;
};

const isEmailValid = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

module.exports = { isEmailValid, isPasswordValid };
