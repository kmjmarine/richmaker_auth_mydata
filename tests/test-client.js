const AppDataSource = require("../api/models/dataSourceAuth");

const truncateTables = async (tableList) => {
  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);

  for (let table of tables) {
    await AppDataSource.query(`TRUNCATE table ${table}`);
  }

  await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);
};

module.exports = { truncateTables };
