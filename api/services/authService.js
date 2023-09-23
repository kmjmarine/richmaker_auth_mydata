const { authDao } = require("../models");

const getCIByPhoneNumber = async (phoneNumber) => {
  const userInfo = await authDao.getCIByPhoneNumber(phoneNumber);

  return userInfo;
};

module.exports = {
  getCIByPhoneNumber,
};
