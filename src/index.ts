import * as config from "@config";
import startServer from "./server";
import CreateToDoListUseCase from "@use_cases/create-to-do-list-use-case";
import ListToDoListsUseCase from "@use_cases/list-to-do-lists-use-case";
import DeleteToDoListUseCase from "@use_cases/delete-to-do-list-use-case";
import CreateToDoUseCase from "@use_cases/create-to-do-use-case";
import ListToDosUseCase from "@use_cases/list-to-dos-use-case";
import DeleteToDoUseCase from "@use_cases/delete-to-do-use-case";
import FinishToDoUseCase from "@use_cases/finish-to-do-use-case";
import UnfinishToDoUseCase from "@use_cases/unfinish-to-do-use-case";
import UpdateToDoUseCase from "@use_cases/update-to-do-use-case";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";

const main = () => {
  config.initConfig();

  // INFRA START
  const toDoListRepository = new MemoryDBRepositories(new MemoryDB());
  // INFRA END

  // USECASES START
  const createToDoListUseCase = new CreateToDoListUseCase(toDoListRepository);
  const listToDoListsUseCase = new ListToDoListsUseCase(toDoListRepository);
  const deleteToDoListUseCase = new DeleteToDoListUseCase(toDoListRepository);

  const createToDoUseCase = new CreateToDoUseCase(toDoListRepository);
  const listToDosUseCase = new ListToDosUseCase(toDoListRepository);
  const deleteToDoUseCase = new DeleteToDoUseCase(toDoListRepository);
  const finishToDoUseCase = new FinishToDoUseCase(toDoListRepository);
  const unfinishToDoUseCase = new UnfinishToDoUseCase(toDoListRepository);
  const updateToDoUseCase = new UpdateToDoUseCase(toDoListRepository);
  // USECASES END

  startServer(
    config.GetServerPort(),
    createToDoListUseCase,
    listToDoListsUseCase,
    deleteToDoListUseCase,
    createToDoUseCase,
    listToDosUseCase,
    deleteToDoUseCase,
    finishToDoUseCase,
    unfinishToDoUseCase,
    updateToDoUseCase,
  );
};

main();
