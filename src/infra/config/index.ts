import development from "./development.json";

export const isProduction = (): boolean => {
  return process.env.SERVER_ENV == "production";
};

export const IsDevelopment = (): boolean => {
  return process.env.SERVER_ENV == "development";
};

export const GetServerPort = (): number => {
  return Number(process.env.SERVER_PORT);
};

export const initConfig = () => {
  if (isProduction()) {
    return;
  }

  process.env = {
    ...process.env,
    ...development,
  };
};
