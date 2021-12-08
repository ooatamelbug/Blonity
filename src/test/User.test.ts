import "jest";
import app from "../app";
import supertest from "supertest";
import databaseConnection from "../settings/database";

const request = supertest(app);

beforeAll(async () => {
  jest.setTimeout(100000);
  await databaseConnection();
});

describe("test user service api", () => {
  it("test username if empty value to test middleware object return", async () => {
    const res = await request.post("/api/user/create").send({
      username: "",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).not.toBeNull();
    expect(res.body).toHaveProperty("message", 'Validation Error');
    expect(res.body.errors.length).toBeGreaterThanOrEqual(1);
    expect(res.body.inputValidation).not.toBeNull();
  });

  it('test validation of password getout error', async () => {
    const res = await request.post("/api/user/create").send({
      username: "username1",
      password: ""
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message', 'Validation Error');
    expect(res.body.errors).toContain('password is not allowed to be null');
  });

  it("test user return object", async () => {
    const res = await request.post("/api/user/create").send({
      username: "name",
      password: "name234r4"
    });
    expect(res.statusCode).toEqual(200);
  });
});
