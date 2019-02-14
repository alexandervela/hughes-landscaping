const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  describe("GET /", () => {

    it("should return status code 200 and 'Hughes Landscaping' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Hughes Landscaping");

        done();
      });
    });

  });

  describe("GET /about-us", () => {

    it("should return status code 200 and 'About Hughes Landscaping' in the body of the response", (done) => {

      request.get(`${base}about-us`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("About Hughes Landscaping");

        done();
      });
    });

  });

  describe("GET /contact", () => {

    it("should return status code 200 and 'Contact Hughes Landscaping' in the body of the response", (done) => {

      request.get(`${base}contact`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Contact Hughes Landscaping");

        done();
      });
    });

  });

  describe("GET /design-and-build", () => {

    it("should return status code 200 and 'Landscape Design' in the body of the response", (done) => {

      request.get(`${base}design-and-build`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Commercial and residential landscaping design");

        done();
      });
    });

  });

  describe("GET /maintenance", () => {

    it("should return status code 200 and 'Commercial and residential landscape maintenance' in the body of the response", (done) => {

      request.get(`${base}maintenance`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Commercial and residential landscape maintenance");

        done();
      });
    });

  });

  describe("GET /our-team", () => {

    it("should return status code 200 and 'Hughes Landscaping's experienced team' in the body of the response", (done) => {

      request.get(`${base}our-team`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Hughes Landscaping's experienced team");

        done();
      });
    });

  });

});
