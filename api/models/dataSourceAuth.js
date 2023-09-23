const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: process.env.AUTHDB_TYPE,
  host: process.env.AUTHDB_HOST,
  port: process.env.AUTHDB_PORT,
  username: process.env.AUTHDB_USERNAME,
  password: process.env.AUTHDB_PASSWORD,
  database: process.env.AUTHDB_DATABASE,
  multipleStatements: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });

module.exports = { AppDataSource };
