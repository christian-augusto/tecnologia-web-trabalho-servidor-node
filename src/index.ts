import express from "express";
import * as config from "./config";

import to_do_lists_controller from "./controllers/to-do-lists";
import to_dos_controller from "./controllers/to-dos";

config.initConfig();

const app = express();

app.use("/to-do-lists", to_do_lists_controller);
app.use("/to-dos", to_dos_controller);

app.listen(config.GetServerPort(), function () {
  console.log(`Server running at port ${config.GetServerPort()}`);
});
