import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import ICreateToDoListUseCase from "./contracts/icreate-to-do-list-use-case";
import CreateToDoListOutput from "./ports/outputs/create-to-do-list-output";

class CreateToDoListUseCase implements ICreateToDoListUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(): CreateToDoListOutput {
    const toDoList = this.toDoListRepository.createToDoList();

    return {
      toDoList: toDoList,
    };
  }
}

export default CreateToDoListUseCase;
