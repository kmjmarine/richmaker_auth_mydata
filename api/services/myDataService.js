const { myDataDao } = require("../models");

const getAccountsByCI = async (CI, providerIDs) => {
  const accounts = await myDataDao.getAccountsByCI(CI, providerIDs);

  return accounts;
};

const getHistoriesByCI = async (CI, providerID, financeNumber) => {
  const histories = await myDataDao.getHistoriesByCI(
    CI,
    providerID,
    financeNumber
  );

  return histories;
};

module.exports = {
  getAccountsByCI,
  getHistoriesByCI,
};
