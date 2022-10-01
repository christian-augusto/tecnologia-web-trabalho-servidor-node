import { faker } from "@faker-js/faker";

import * as config from "@config";

describe("@Config", function () {
  const oldEnv = process.env;

  afterEach(() => {
    process.env = oldEnv;
  });

  describe("initConfig function", () => {
    it("when SERVER_ENV is test", () => {
      process.env.SERVER_ENV = "test";

      config.initConfig();

      expect(process.env.SERVER_ENV).toBe("test");
      expect(process.env.SERVER_PORT).toBe("3000");
    });

    it("when SERVER_ENV is development", () => {
      process.env.SERVER_ENV = "development";

      config.initConfig();

      expect(process.env.SERVER_ENV).toBe("development");
      expect(process.env.SERVER_PORT).toBe("3000");
    });

    it("when SERVER_ENV is development by empty SERVER_ENV", () => {
      config.initConfig();

      expect(process.env.SERVER_ENV).toBe("development");
      expect(process.env.SERVER_PORT).toBe("3000");
    });

    it("when SERVER_ENV is production", () => {
      process.env.SERVER_ENV = "production";

      const serverPort = faker.random.numeric();
      process.env.SERVER_PORT = serverPort;

      config.initConfig();

      expect(process.env.SERVER_ENV).toBe("production");
      expect(process.env.SERVER_PORT).toBe(serverPort);
    });
  });

  describe("isProduction function", () => {
    it("when SERVER_ENV is test", () => {
      process.env.SERVER_ENV = "test";

      config.initConfig();

      expect(config.isProduction()).toBe(false);
    });

    it("when SERVER_ENV is development", () => {
      process.env.SERVER_ENV = "development";

      config.initConfig();

      expect(config.isProduction()).toBe(false);
    });

    it("when SERVER_ENV is production", () => {
      process.env.SERVER_ENV = "production";

      config.initConfig();

      expect(config.isProduction()).toBe(true);
    });
  });

  describe("isDevelopment function", () => {
    it("when SERVER_ENV is test", () => {
      process.env.SERVER_ENV = "test";

      config.initConfig();

      expect(config.isDevelopment()).toBe(false);
    });

    it("when SERVER_ENV is development", () => {
      process.env.SERVER_ENV = "development";

      config.initConfig();

      expect(config.isDevelopment()).toBe(true);
    });

    it("when SERVER_ENV is production", () => {
      process.env.SERVER_ENV = "production";

      config.initConfig();

      expect(config.isDevelopment()).toBe(false);
    });
  });

  describe("isTest function", () => {
    it("when SERVER_ENV is test", () => {
      process.env.SERVER_ENV = "test";

      config.initConfig();

      expect(config.isTest()).toBe(true);
    });

    it("when SERVER_ENV is development", () => {
      process.env.SERVER_ENV = "development";

      config.initConfig();

      expect(config.isTest()).toBe(false);
    });

    it("when SERVER_ENV is production", () => {
      process.env.SERVER_ENV = "production";

      config.initConfig();

      expect(config.isTest()).toBe(false);
    });
  });

  describe("getServerPort function", () => {
    it("when SERVER_ENV is test", () => {
      process.env.SERVER_ENV = "test";

      config.initConfig();

      expect(config.getServerPort()).toBe(3000);
    });

    it("when SERVER_ENV is development", () => {
      process.env.SERVER_ENV = "development";

      config.initConfig();

      expect(config.getServerPort()).toBe(3000);
    });

    it("when SERVER_ENV is production", () => {
      process.env.SERVER_ENV = "production";

      const serverPort = faker.random.numeric();

      process.env.SERVER_PORT = serverPort;

      config.initConfig();

      expect(config.getServerPort()).toBe(Number(serverPort));
    });
  });
});
