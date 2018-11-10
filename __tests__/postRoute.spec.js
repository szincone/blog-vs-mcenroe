const request = require("supertest");
const server = require("../routes/postRoute.js");

describe("index.js", () => {
  it("runs the tests", () => {
    expect(true).toBeTruthy();
  });

  describe("GET /", () => {
    it("returns a 200 (OK) status code", async () => {
      // get access to the server
      // use supertest to make a GET to the server
      const response = await request(server).get("/all-notes");
      expect(response.status).toEqual(200);
    });
  });
});
