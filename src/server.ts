import express from "express";

import toDoListsController from "./controllers/to-do-lists";
import toDosController from "./controllers/to-dos";
import ICreateToDoListUsecase from "@usecases/contracts/icreate-to-do-list-usecase";
import IListToDoListsUsecase from "@usecases/contracts/ilist-to-do-lists-usecase";
import IDeleteToDoListUsecase from "@usecases/contracts/idelete-to-do-list-usecase";
import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";
import ICreateToDoUsecase from "@usecases/contracts/icreate-to-do-usecase";

export function startServer(
  serverPort: number,
  createToDoListUsecase: ICreateToDoListUsecase,
  listToDoListsUsecase: IListToDoListsUsecase,
  listToDosUsecase: IListToDosUsecase,
  deleteToDoListUsecase: IDeleteToDoListUsecase,
  createToDoUsecase: ICreateToDoUsecase,
) {
  const app = express();

  app.use("/to-do-lists", toDoListsController(createToDoListUsecase, listToDoListsUsecase, deleteToDoListUsecase));
  app.use("/to-dos", toDosController(listToDosUsecase, createToDoUsecase));

  app.listen(serverPort, function () {
    console.log(`Server running at port ${serverPort}`);
  });
}
