import dev1 from "./dev1.json";
import dev2 from "./dev2.json";

export function isProduction(): boolean {
  return process.env.ENV == "production";
}

function isDev2(): boolean {
  return process.env.ENV == "dev2";
}

const dev = isDev2() ? dev2 : dev1;

export const TESTE: string = isProduction() ? String(process.env.TESTE) : dev.TESTE;
