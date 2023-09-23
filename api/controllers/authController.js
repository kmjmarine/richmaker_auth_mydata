const { authService } = require("../services");
const { catchAsync } = require("../utils/error");

const sendCI = catchAsync(async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  try {
    const ciValue = await authService.getCIByPhoneNumber(phoneNumber);

    if (!ciValue) {
      const error = new Error(`INVALID_USER`);
      error.statusCode = 200;

      throw error;
    }

    res.status(200).json(ciValue);
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = {
  sendCI,
};
