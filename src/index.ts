import * as config from "./config";
import { startServer } from "./server";
import CreateToDoListUsecase from "@usecases/create-to-do-list-usecase";
import ListToDoListsUsecase from "@usecases/list-to-do-lists-usecase";
import DeleteToDoListUsecase from "@usecases/delete-to-do-list-usecase";
import ListToDosUsecase from "@usecases/list-to-dos-usecase";
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
  const listToDosUsecase = new ListToDosUsecase(toDoListRepository);
  const deleteToDoListUsecase = new DeleteToDoListUsecase(toDoListRepository);
  // USECASES END

  startServer(
    config.GetServerPort(),
    createToDoListUsecase,
    listToDoListsUsecase,
    listToDosUsecase,
    deleteToDoListUsecase,
  );
}

main();
