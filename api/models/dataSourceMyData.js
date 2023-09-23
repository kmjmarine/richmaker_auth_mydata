const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: process.env.MYDATADB_TYPE,
  host: process.env.MYDATADB_HOST,
  port: process.env.MYDATADB_PORT,
  username: process.env.MYDATADB_USERNAME,
  password: process.env.MYDATADB_PASSWORD,
  database: process.env.MYDATADB_DATABASE,
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
