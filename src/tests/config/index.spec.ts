import * as config from "@config";

describe("@Config", function () {
  const oldEnv = process.env;

  beforeEach(function () {
    process.env = { ...oldEnv };
  });

  afterAll(function () {
    process.env = oldEnv;
  });

  describe("initConfig function", function () {
    it("when ENV is development", function () {
      config.initConfig();

      expect(process.env.SERVER_ENV).toBe("development");
      expect(process.env.SERVER_PORT).toBe("3000");
    });
  });
});
