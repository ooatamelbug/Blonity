import app from "../app";
import request from "supertest";

describe('test user service api', () => {
    test(`test user validation for create registerUser`, async () => {
        const res = await request(app).post('/app/user/create').send({
            username: "",
            password: "",
            email: "",
        });
        expect(res.statusCode).toBe(400);
    });
})