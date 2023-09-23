const request = require("supertest");

const { createApp } = require("../../app");
const { AppDataSource } = require("../../api/models/dataSourceAuth");

describe("auth", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {});

  test("SUCCESS: sendCI", async () => {
    const response = await request(app).post("/auth").send({
      phoneNumber: "01047130841",
    });
    expect(response.body).toEqual(response.body);
    expect(response.statusCode).toEqual(200);
  });

  test("FAILED: invalid user", async () => {
    await request(app)
      .post("/auth")
      .send({
        phoneNumber: "01047130842",
      })
      .expect(401)
      .expect({ message: "INVALID_USER" });
  });
});
