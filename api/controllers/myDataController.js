const { myDataService } = require("../services");
const { catchAsync } = require("../utils/error");
const { encrypt, decrypt } = require("../utils/crypto");

const sendAccounts = catchAsync(async (req, res) => {
  const { CI, providerIDs } = req.body;

  if (!CI || !providerIDs) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  try {
    const accounts = await myDataService.getAccountsByCI(CI, providerIDs);

    if (accounts.length <= 0) {
      const error = new Error("NO_RECORDS");
      error.statusCode = 400;

      throw error;
    }

    const encryptedAccounts = encrypt(accounts);

    res.status(200).json({ data: encryptedAccounts });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

const sendHistories = catchAsync(async (req, res) => {
  const { CI, providerID, financeNumber } = req.body;

  if (!CI || !providerID || !financeNumber) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  try {
    const histories = await myDataService.getHistoriesByCI(
      CI,
      providerID,
      financeNumber
    );

    if (histories[0].length <= 0) {
      const error = new Error("NO_RECORDS");
      error.statusCode = 400;

      throw error;
    }

    const encryptedHistories = encrypt(histories);

    res.status(200).json({ data: encryptedHistories });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = {
  sendAccounts,
  sendHistories,
};
