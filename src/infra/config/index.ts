import test from "./test.json";
import development from "./development.json";

const getServerEnv = (): string => {
  return String(process.env.SERVER_ENV);
};

export const isProduction = (): boolean => {
  return getServerEnv() == "production";
};

export const isDevelopment = (): boolean => {
  return getServerEnv() == "development";
};

export const isTest = (): boolean => {
  return getServerEnv() == "test";
};

export const getServerPort = (): number => {
  return Number(process.env.SERVER_PORT);
};

export const initConfig = () => {
  if (isProduction()) {
    return;
  }

  if (isTest()) {
    process.env = {
      ...test,
    };

    return;
  }

  process.env = {
    ...development,
  };
};
