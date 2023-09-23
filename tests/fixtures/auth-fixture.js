const AppDataSource = require("../../api/models/dataSourceAuth");

const getUserCI = (phoneNumber) => {
  return AppDataSource.query(
    `
    SELECT
    phone_number AS phoneNumber, CI
    FROM identities_test
    WHERE phone_number = ?
  `,
    phoneNumber
  );
};

module.exports = { getUserCI };
