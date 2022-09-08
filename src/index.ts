import * as config from "./config";
import { startServer } from "./server";
import CreateToDoListUsecase from "@usecases/create-to-do-list-usecase";
import ListToDoListsUsecase from "@usecases/list-to-do-lists-usecase";
import DeleteToDoListUsecase from "@usecases/delete-to-do-list-usecase";
import CreateToDoUsecase from "@usecases/create-to-do-usecase";
import ListToDosUsecase from "@usecases/list-to-dos-usecase";
import DeleteToDoUsecase from "@usecases/delete-to-do-usecase";
import FinishToDoUsecase from "@usecases/finish-to-do-usecase";
import UnfinishToDoUsecase from "@usecases/unfinish-to-do-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";

function main() {
  config.initConfig();

  // INFRA START
  const toDoListRepository = new MemoryDBRepositories(new MemoryDB());
  // INFRA END

  // USECASES START
  const createToDoListUsecase = new CreateToDoListUsecase(toDoListRepository);
  const listToDoListsUsecase = new ListToDoListsUsecase(toDoListRepository);
  const deleteToDoListUsecase = new DeleteToDoListUsecase(toDoListRepository);

  const createToDoUsecase = new CreateToDoUsecase(toDoListRepository);
  const listToDosUsecase = new ListToDosUsecase(toDoListRepository);
  const deleteToDoUsecase = new DeleteToDoUsecase(toDoListRepository);
  const finishToDoUsecase = new FinishToDoUsecase(toDoListRepository);
  const unfinishToDoUsecase = new UnfinishToDoUsecase(toDoListRepository);
  // USECASES END

  startServer(
    config.GetServerPort(),
    createToDoListUsecase,
    listToDoListsUsecase,
    deleteToDoListUsecase,
    createToDoUsecase,
    listToDosUsecase,
    deleteToDoUsecase,
    finishToDoUsecase,
    unfinishToDoUsecase,
  );
}

main();
