import * as config from "./config";
import { startServer } from "./server";

function main() {
  config.initConfig();

  startServer(config.GetServerPort());
}

main();
