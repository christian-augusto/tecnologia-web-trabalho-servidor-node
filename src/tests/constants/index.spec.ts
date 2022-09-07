import { isProduction } from "@constants";

describe("@Constants", function () {
  const oldEnv = process.env;

  beforeEach(function () {
    process.env = { ...oldEnv };
  });

  afterAll(function () {
    process.env = oldEnv;
  });

  describe("isProduction function", function () {
    it("isProduction function process.env.ENV is production", function () {
      process.env.ENV = "production";

      expect(isProduction()).toBe(true);
    });

    it("process.env.ENV is not production", function () {
      process.env.ENV = undefined;

      expect(isProduction()).toBe(false);
    });
  });
});
