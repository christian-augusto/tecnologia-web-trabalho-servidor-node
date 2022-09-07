import express from "express";

import toDoListsController from "./controllers/to-do-lists";
import toDosController from "./controllers/to-dos";

export function startServer(serverPort: number) {
  const app = express();

  app.use("/to-do-lists", toDoListsController());
  app.use("/to-dos", toDosController());

  app.listen(serverPort, function () {
    console.log(`Server running at port ${serverPort}`);
  });
}
