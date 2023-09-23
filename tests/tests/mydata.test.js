const request = require("supertest");

const { createApp } = require("../../app");
const { AppDataSource } = require("../../api/models/dataSourceMyData");

describe("mydata", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {});

  test("SUCCESS: getAccountsByCI", async () => {
    const response = await request(app)
      .post("/mydata/account")
      .send({
        CI: "23RW7AUQVFGX7VW6N4XHQH6VPFR2I5JVRMLA4Q4T9ZAVXQJTC9NJ75H7GC3JNPVEBI",
        providerIDs: [4, 6],
      });
    expect(response.body).toHaveProperty("data");
    expect(response.statusCode).toEqual(200);
  });

  test("FAILED: no records", async () => {
    await request(app)
      .post("/mydata/account")
      .send({
        CI: "23RW7AUQVFGX7VW6N4XHQH6VPFR2I5JVRMLA4Q4T9ZAVXQJTC9NJ75H7GC3JNPVEBI",
        providerIDs: [1, 2, 3],
      })
      .expect(400)
      .expect({ message: "NO_RECORDS" });
  });

  test("SUCCESS: getHistoriesByCI", async () => {
    const response = await request(app).post("/mydata").send({
      CI: "23RW7AUQVFGX7VW6N4XHQH6VPFR2I5JVRMLA4Q4T9ZAVXQJTC9NJ75H7GC3JNPVEBI",
      providerID: 4,
      financeNumber: "004-4747-4466-44",
    });
    expect(response.body).toHaveProperty("data");
    expect(response.statusCode).toEqual(200);
  });

  test("FAILED: no records", async () => {
    await request(app)
      .post("/mydata")
      .send({
        CI: "23RW7AUQVFGX7VW6N4XHQH6VPFR2I5JVRMLA4Q4T9ZAVXQJTC9NJ75H7GC3JNPVEBI",
        providerID: 3,
        financeNumber: "004-4747-4466-44",
      })
      .expect(400)
      .expect({ message: "NO_RECORDS" });
  });
});
