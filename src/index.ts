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
import MemoryDb from "@infra/persistence/memory-db";
import MemoryDbToDosRepository from "@infra/persistence/memory-db/repositories/memory-db-to-dos-repository";
import MemoryDbToDoListsRepository from "@infra/persistence/memory-db/repositories/memory-db-to-do-lists-repository";

const main = () => {
  config.initConfig();

  // INFRA START
  const memoryDb = new MemoryDb();

  const memoryDbToDoListsRepository = new MemoryDbToDoListsRepository(memoryDb);
  const memoryDbToDosRepository = new MemoryDbToDosRepository(memoryDb);
  // INFRA END

  // USECASES START
  const createToDoListUseCase = new CreateToDoListUseCase(memoryDbToDoListsRepository);
  const listToDoListsUseCase = new ListToDoListsUseCase(memoryDbToDoListsRepository);
  const deleteToDoListUseCase = new DeleteToDoListUseCase(memoryDbToDoListsRepository);

  const createToDoUseCase = new CreateToDoUseCase(memoryDbToDosRepository);
  const listToDosUseCase = new ListToDosUseCase(memoryDbToDosRepository);
  const deleteToDoUseCase = new DeleteToDoUseCase(memoryDbToDosRepository);
  const finishToDoUseCase = new FinishToDoUseCase(memoryDbToDosRepository);
  const unfinishToDoUseCase = new UnfinishToDoUseCase(memoryDbToDosRepository);
  const updateToDoUseCase = new UpdateToDoUseCase(memoryDbToDosRepository);
  // USECASES END

  startServer(
    config.getServerPort(),
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
