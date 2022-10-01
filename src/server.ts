import express from "express";
import path from "path";

import toDoListsController from "./controllers/to-do-lists";
import toDosController from "./controllers/to-dos";
import homeController from "./controllers/pages/home";
import healthChecker from "./controllers/health-checker";
import ICreateToDoListUseCase from "@use_cases/contracts/icreate-to-do-list-use-case";
import IListToDoListsUseCase from "@use_cases/contracts/ilist-to-do-lists-use-case";
import IDeleteToDoListUseCase from "@use_cases/contracts/idelete-to-do-list-use-case";
import ICreateToDoUseCase from "@use_cases/contracts/icreate-to-do-use-case";
import IListToDosUseCase from "@use_cases/contracts/ilist-to-dos-use-case";
import IDeleteToDoUseCase from "@use_cases/contracts/idelete-to-do-use-case";
import IFinishToDoUseCase from "@use_cases/contracts/ifinish-to-do-use-case";
import IUnfinishToDoUseCase from "@use_cases/contracts/iunfinish-to-do-use-case";
import IUpdateToDoUseCase from "@use_cases/contracts/iupdate-to-do-use-case";

const startServer = (
  serverPort: number,
  createToDoListUseCase: ICreateToDoListUseCase,
  listToDoListsUseCase: IListToDoListsUseCase,
  deleteToDoListUseCase: IDeleteToDoListUseCase,
  CreateToDoUseCase: ICreateToDoUseCase,
  listToDosUseCase: IListToDosUseCase,
  deleteToDoUseCase: IDeleteToDoUseCase,
  finishToDoUseCase: IFinishToDoUseCase,
  unfinishToDoUseCase: IUnfinishToDoUseCase,
  updateToDoUseCase: IUpdateToDoUseCase,
): void => {
  const app = express();

  app.use(express.static(path.resolve("src/public/static")));

  app.use("/to-do-lists", toDoListsController(createToDoListUseCase, listToDoListsUseCase, deleteToDoListUseCase));
  app.use(
    "/to-dos",
    toDosController(
      CreateToDoUseCase,
      listToDosUseCase,
      deleteToDoUseCase,
      finishToDoUseCase,
      unfinishToDoUseCase,
      updateToDoUseCase,
    ),
  );
  app.use(homeController());
  app.use("/health-checker", healthChecker());

  app.listen(serverPort, () => {
    console.log(`Server running at port ${serverPort}`);
  });
};

export default startServer;
