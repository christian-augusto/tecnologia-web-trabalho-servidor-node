import development from "./development.json";

export function initConfig() {
  if (isProduction()) {
    return;
  }

  process.env = {
    ...process.env,
    ...development,
  };
}

export function isProduction(): boolean {
  return process.env.SERVER_ENV == "production";
}

export function IsDevelopment(): boolean {
  return process.env.SERVER_ENV == "development";
}

export function GetServerPort(): number {
  return Number(process.env.SERVER_PORT);
}
