import express from "express";
import path from "path";

import toDoListsController from "./controllers/to-do-lists";
import toDosController from "./controllers/to-dos";
import homeController from "./controllers/pages/home";
import healthChecker from "./controllers/health-checker";
import ICreateToDoListUsecase from "@usecases/contracts/icreate-to-do-list-usecase";
import IListToDoListsUsecase from "@usecases/contracts/ilist-to-do-lists-usecase";
import IDeleteToDoListUsecase from "@usecases/contracts/idelete-to-do-list-usecase";
import ICreateToDoUsecase from "@usecases/contracts/icreate-to-do-usecase";
import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";
import IDeleteToDoUsecase from "@usecases/contracts/idelete-to-do-usecase";
import IFinishToDoUsecase from "@usecases/contracts/ifinish-to-do-usecase";
import IUnfinishToDoUsecase from "@usecases/contracts/iunfinish-to-do-usecase";
import IUpdateToDoUsecase from "@usecases/contracts/iupdate-to-do-usecase";

export function startServer(
  serverPort: number,
  createToDoListUsecase: ICreateToDoListUsecase,
  listToDoListsUsecase: IListToDoListsUsecase,
  deleteToDoListUsecase: IDeleteToDoListUsecase,
  createToDoUsecase: ICreateToDoUsecase,
  listToDosUsecase: IListToDosUsecase,
  deleteToDoUsecase: IDeleteToDoUsecase,
  finishToDoUsecase: IFinishToDoUsecase,
  unfinishToDoUsecase: IUnfinishToDoUsecase,
  updateToDoUsecase: IUpdateToDoUsecase,
) {
  const app = express();

  app.use(express.static(path.resolve("src/public/static")));

  app.use("/to-do-lists", toDoListsController(createToDoListUsecase, listToDoListsUsecase, deleteToDoListUsecase));
  app.use(
    "/to-dos",
    toDosController(
      createToDoUsecase,
      listToDosUsecase,
      deleteToDoUsecase,
      finishToDoUsecase,
      unfinishToDoUsecase,
      updateToDoUsecase,
    ),
  );
  app.use(homeController());
  app.use("/health-checker", healthChecker());

  app.listen(serverPort, function () {
    console.log(`Server running at port ${serverPort}`);
  });
}
