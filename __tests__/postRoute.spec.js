const request = require("supertest");
const server = require("../routes/postRoute.js");
console.log("INDEX SERVER", server);
describe("index.js", () => {
  it("runs the tests", () => {
    expect(true).toBeTruthy();
  });

  // describe("GET /", () => {
  //   it("returns a 200 (OK) status code", async () => {
  //     // get access to the server
  //     // use supertest to make a GET to the server
  //     const response = await request(server).get("/posts");
  //     expect(response.status).toEqual(200);
  //   });
  // });
});
