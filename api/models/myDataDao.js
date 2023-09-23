const { AppDataSource } = require("./dataSourceMyData");

const getAccountsByCI = async (CI, providerIDs) => {
  try {
    const results = await AppDataSource.query(
      `
      SELECT
	      provider_id AS providerID, 
	      account_number AS financeNumber,
        account_name AS financeName
      FROM histories
      WHERE is_get = 0
	      AND CI = ?
	      AND provider_id IN (?)
      GROUP BY 
        provider_id, 
        account_number,
        account_name
      `,
      [CI, providerIDs]
    );

    return results;
  } catch {
    const error = new Error("NO_RECORDS");
    error.statusCode = 400;

    throw error;
  }
};

const getHistoriesByCI = async (CI, providerID, financeNumber) => {
  try {
    const results = await AppDataSource.query(
      `
      SELECT
        id,
        created_at AS createdAT,
        user_name AS userName,
        provider_id AS providerID, 
        category_id AS categoryID, 
        is_monthly AS isMonthly, 
        amount, 
        transaction_note AS transactionNote, 
        account_number AS financeNumber,
        account_name AS financeName
      FROM histories
      WHERE 
        is_get = 0 
        AND CI = ? 
        AND provider_id = ? 
        AND account_number = ?
      ORDER BY id;
      UPDATE histories SET is_get = 1 WHERE CI = ?;
      `,
      [CI, providerID, financeNumber, CI]
    );

    return results;
  } catch {
    const error = new Error("NO_RECORDS");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  getAccountsByCI,
  getHistoriesByCI,
};
